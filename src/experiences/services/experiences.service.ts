import { Inject, Injectable } from '@nestjs/common';
import { CategoriesRepository } from '../repositories/categories.repository';
import {
  CATEGORIES_REPOSITORY_TOKEN,
  EXPERIENCES_REPOSITORY_TOKEN,
  WEEKDAYS,
} from '@src/experiences/utils/constants.const';
import { ProductsRepository } from '../repositories/products.repository';
import { AvailableOptionsInputDto } from '../dto/available-options-input.dto';
import { OptionsEntity } from '@src/experiences/entities/options.entity';

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
    input: AvailableOptionsInputDto,
  ): Promise<any> {
    const options: OptionsEntity[] =
      await this.experiencesRepository.getOptions(id, input);

    return {
      productId: 0,
      options: options.map((option) => {
        const isValidDate = this.isValidDate(input, option);
        const isOptionAvailableOnDate = this.isOptionAvailableOnDate(
          input,
          option,
        );
        const isAvailable = isValidDate && isOptionAvailableOnDate;
        let nextAvailableDate = null;
        if (isValidDate && !isOptionAvailableOnDate) {
          nextAvailableDate = this.getNextAvailableDate(input, option);
        }
        return {
          id: option.id,
          title: option.title,
          duration: '3 hours',
          isAvailable: isAvailable,
          nextAvailableDate: nextAvailableDate,
          unavailabilityReason: '',
          languages: option.languagesToOptions?.map((languagesToOption) => {
            return {
              id: languagesToOption.id,
              isoCode: languagesToOption.language.isoCode,
              language: languagesToOption.language.language,
            };
          }),
          availabilities: option.availability.schedule.map((availability) => {
            return {
              vacancies: 0,
              availabilityType: option.availability.type as string,
              startTime: '',
              endTime: '',
              unformattedStartTime: '',
              unformattedEndTime: '',
              priceBreakdown: option.pricing?.map((price) => {
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

  isOptionAvailableOnDate(
    input: AvailableOptionsInputDto,
    option: OptionsEntity,
  ): boolean {
    const weekday = WEEKDAYS[input.date.getDay()];

    const scheduleWeekdays = [];
    option.availability.schedule.forEach((schedule) => {
      scheduleWeekdays.push(schedule.weekday);
    });

    return scheduleWeekdays.includes(weekday);
  }

  isValidDate(input: AvailableOptionsInputDto, option: OptionsEntity): boolean {
    if (input.date < option.availability.startDate) return false;
    if (input.date > option.availability.endDate) return false;

    return true;
  }

  getNextAvailableDate(
    input: AvailableOptionsInputDto,
    option: OptionsEntity,
  ): any {
    const weekday = WEEKDAYS[input.date.getDay()];

    const scheduleWeekdays = [];
    option.availability.schedule.forEach((schedule) => {
      scheduleWeekdays.push(schedule.weekday);
    });

    const inputDayIndex = WEEKDAYS.indexOf(weekday);
    const daysUntilNextAvailableWeekday = this.daysUntilNextAvailableWeekday(
      inputDayIndex,
      scheduleWeekdays,
    );

    return new Date(
      input.date.getTime() +
        daysUntilNextAvailableWeekday * 24 * 60 * 60 * 1000,
    );
  }

  daysUntilNextAvailableWeekday(currentDay, availableWeekDays) {
    const currentDayIndex = WEEKDAYS.indexOf(currentDay);

    let nextAvailableIndex = currentDayIndex + 1;
    while (!availableWeekDays.includes(WEEKDAYS[nextAvailableIndex % 7])) {
      nextAvailableIndex++;
    }

    return nextAvailableIndex - currentDayIndex;
  }
}
