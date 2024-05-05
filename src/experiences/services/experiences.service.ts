import { HttpException, Inject, Injectable } from '@nestjs/common';
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
        const price = this.getPrice(input, option);
        const inputWeekday = this.getInputWeekday(input);
        return {
          id: option.id,
          title: option.title,
          duration: this.getDuration(option),
          languages: option.languagesOptions?.map((languagesToOption) => {
            return {
              id: languagesToOption.id,
              isoCode: languagesToOption.language.isoCode,
              language: languagesToOption.language.language,
            };
          }),
          availabilities: option.schedule
            .filter((schedules) => inputWeekday === schedules.weekday)
            .map((schedule) => {
              return schedule.timeSlots.map((timeSlot) => {
                console.log(timeSlot);
                return {
                  vacancies: timeSlot.vacancies,
                  availabilityType: option.availability.type as string,
                  startTime: timeSlot.from,
                  endTime: timeSlot.to,
                  unformattedStartTime: timeSlot.from,
                  unformattedEndTime: timeSlot.to,
                  ...price,
                };
              });
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
    const weekday = this.getInputWeekday(input);

    const scheduleWeekdays = [];
    option.schedule.forEach((schedule) => {
      scheduleWeekdays.push(schedule.weekday);
    });

    if (!scheduleWeekdays.includes(weekday)) {
      throw new HttpException(
        {
          message: `This date is not available. Please select a different date.`,
          nextAvailableDate: this.getNextAvailableDate(input, option),
        },
        404,
      );
    }

    return true;
  }

  getInputWeekday(input: AvailableOptionsInputDto): string {
    return WEEKDAYS[input.date.getDay()];
  }

  isValidDate(input: AvailableOptionsInputDto, option: OptionsEntity): boolean {
    if (input.date < option.availability.startDate) {
      throw new HttpException(
        `The requested date ${input.date.toDateString()} is invalid`,
        400,
      );
    }

    if (
      option.availability.endDate &&
      input.date > option.availability.endDate
    ) {
      throw new HttpException(
        {
          message: `The requested date ${input.date.toDateString()} is invalid`,
        },
        400,
      );
    }

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

  getDuration(option: OptionsEntity): string {
    return `${option.duration.value} ${option.duration.unit}`;
  }

  getPrice(input: AvailableOptionsInputDto, option: OptionsEntity): any {
    const pricesBreakdown = input.categories.map((category, i) => {
      const pricing = option.pricing.find(
        (price) => price.ticketCategory === category,
      );

      if (!pricing) {
        throw new HttpException(
          { message: `Category ${category} not found` },
          404,
        );
      }

      return {
        title: pricing.ticketCategory,
        totalParticipants: input.participants[i],
        totalPrice: pricing.price * Number(input.participants[i]),
        participantsCategoryIdentifier: `(Age ${pricing.ageFrom} - ${pricing.ageTo})`,
        pricePerPerson: pricing.price,
        currencySymbol: pricing.currencySymbol,
        currencyIso: pricing.currencyIso,
      };
    });

    let finalPrice = 0;
    pricesBreakdown.forEach((price) => {
      finalPrice = price.totalPrice + finalPrice;
    });

    const price = {
      basePrice: finalPrice,
      formattedBasePrice: `${pricesBreakdown[0].currencySymbol} ${finalPrice}`,
      currency: pricesBreakdown[0].currencyIso,
      currencySymbol: pricesBreakdown[0].currencySymbol,
    };

    return {
      pricesBreakdown,
      price,
    };
  }
}
