// import { Injectable } from '@nestjs/common';
// import { AvailableOptionsDto } from '@src/experiences/dto/available-options.dto';
//
// @Injectable()
// export class AvailableOptionsPresenter {
//   found(availabilityOptions: any): AvailableOptionsDto {
//     return {
//       activityId: contract.id,
//       options: [
//         {
//           id: 1,
//           title: 'string',
//           duration: 'string',
//           isAvailable: false,
//           nextAvailableDate: new Date(),
//           unavailabilityReason: 'string',
//           languages: [
//             {
//               id: 0,
//               isoCode: 'string',
//               language: 'string',
//             }
//           ],
//           availabilities: [
//             {
//               vacancies: 0,
//               availabilityType: 'string',
//               startTime: 'string',
//               endTime: 'string',
//               unformattedStartTime: 'string',
//               unformattedEndTime: 'string',
//               priceBreakdown: [
//                 {
//                   title: 'string',
//                   totalParticipants: 0,
//                   totalPrice: 0,
//                   pricePerPerson: 0,
//                   priceLabel: 'string',
//                   pricingCategoryCode: 0,
//                 }
//               ],
//               price: {
//                 basePrice: 0,
//                 formattedBasePrice: 'string',
//                 currency: 'string',
//                 currencySymbol: 'string',
//               }
//             }
//           ],
//           cancellation: {
//             isCancelable: false,
//             cancellationOffset: 0,
//             cancellationOffsetUnit: 'string',
//             feeUnit: 'string',
//             fee: 0,
//           },
//           attributes: [
//             {
//               type: 'string',
//               label: 'string',
//             },
//           ],
//         }
//       ],
//     };
//   }
// }
