import { Inject, Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories.repository';
import {
  CATEGORIES_REPOSITORY_TOKEN,
  EXPERIENCES_REPOSITORY_TOKEN,
} from '@src/experiences/utils/constants.const';
import { ProductsRepository } from '../repositories/products.repository';
import { AvailableOptionsFilterDto } from '../dto/available-options-filter.dto';
import { AvailableOptionsDto } from '@src/experiences/dto/available-options.dto';
import { OptionsEntity } from '@src/experiences/entities/options.entity';
import { AvailabilitiesEntity } from '@src/experiences/entities/availabilities.entity';

@Injectable()
export class ExperiencesService {
  constructor(
    @Inject(EXPERIENCES_REPOSITORY_TOKEN)
    private readonly experiencesRepository: ProductsRepository,
    @Inject(CATEGORIES_REPOSITORY_TOKEN)
    private readonly attractionCategories: CategoriesRepository,
  ) {}

  async getOverview(id: number) {
    const overview = await this.experiencesRepository.getOverview(id);
    return overview;
  }

  async getAvailabilityAndPricing(
    id: number,
    availabilityDto: AvailableOptionsFilterDto,
  ): Promise<AvailableOptionsDto> {
    console.log(availabilityDto);
    // const participants = availabilityDto.participants;
    // const categories = availabilityDto.categories;
    // console.log(participants, categories);
    const options: OptionsEntity[] =
      await this.experiencesRepository.getOptions(id, availabilityDto);

    const timeAvailabilities = this.getTimeAvailabilities(options[0]);

    // return options;

    // const price = this.getPrice(options);
    //

    return {
      productId: options[0].product.id,
      options: options.map((option) => {
        return {
          id: option.id,
          title: option.title,
          duration: option.duration.unit as string,
          isAvailable: option.isActive,
          nextAvailableDate: new Date(),
          unavailabilityReason: '',
          languages: option.languagesToOptions.map((languagesToOption) => {
            return {
              id: languagesToOption.id,
              isoCode: languagesToOption.language.isoCode,
              language: languagesToOption.language.language,
            };
          }),
          availabilities: option.availabilities.map((availability) => {
            return {
              vacancies: 0,
              availabilityType: availability.type as string,
              startTime: '',
              endTime: '',
              unformattedStartTime: '',
              unformattedEndTime: '',
              priceBreakdown: option.pricing.map((price) => {
                return {
                  title: price.currency,
                  totalParticipants: 0,
                  totalPrice: 0,
                  pricePerPerson: 0,
                  priceLabel: '',
                  pricingCategoryCode: 0,
                };
              }),
              price: {
                basePrice: 0,
                formattedBasePrice: '',
                currency: '',
                currencySymbol: '',
              },
            };
          }),
          cancellation: {
            isCancelable: false,
            cancellationOffset: 0,
            cancellationOffsetUnit: '',
            feeUnit: '',
            fee: 0,
          },
          attributes: [
            {
              type: '',
              label: '',
            },
          ],
        };
      }),
    };
  }

  private getTimeAvailabilities(options: OptionsEntity) {
    return options.pricing.map((pricing) => {
      return {
        id: pricing.id,
        price: pricing.price,
        currency: pricing.currency,
        minAge: pricing.minAge,
        maxAge: pricing.maxAge,
        participantsType: pricing.participantsType,
        ticketCategory: pricing.ticketCategory,
        commissionRate: pricing.commissionRate,
      };
    });
  }
}
