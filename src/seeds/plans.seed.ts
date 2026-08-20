// import { config } from '@/config';
// // import { SubscriptionModel } from '@/modules/subscriptions/subscription.model';
// import { logger } from '@/infrastructure/logger/winston.logger';
// import { connectDatabase, disconnectDatabase } from '@/infrastructure/database/mongoose.connection';

// const plans = [
//     {
//         title: 'Basic',
//         description: 'Essential coverage for individuals',
//         priceMonthly: 9.99,
//         priceYearly: 99.99,
//         features: ['Submit up to 5 claims per month', 'Email support', 'Basic analytics'],
//         benefits: ['Fast claim processing', '24/7 access to portal'],
//         isActive: true,
//         sortOrder: 1,
//     },
//     {
//         title: 'Standard',
//         description: 'Perfect for families and small properties',
//         priceMonthly: 19.99,
//         priceYearly: 199.99,
//         features: ['Unlimited claims', 'Priority email support', 'Advanced analytics', 'Property video storage'],
//         benefits: ['Faster claim processing', 'Dedicated support', 'Bulk claim submission'],
//         isActive: true,
//         sortOrder: 2,
//     },
//     {
//         title: 'Premium',
//         description: 'Complete coverage for property owners',
//         priceMonthly: 39.99,
//         priceYearly: 399.99,
//         features: ['Everything in Standard', 'Phone support', 'Claim tracking dashboard', 'Multi-property management', 'Expert consultation'],
//         benefits: ['Instant claim approval', 'Personal account manager', 'Priority processing'],
//         isActive: true,
//         sortOrder: 3,
//     },
// ];

// export const seedPlans = async (): Promise<void> => {
//     await connectDatabase();

//     try {
//         const existingCount = await SubscriptionModel.countDocuments();
//         if (existingCount > 0) {
//             logger.info('Plans already seeded, skipping', { existingCount });
//             return;
//         }

//         await SubscriptionModel.insertMany(plans);
//         logger.info('✅ Plans seeded successfully', { count: plans.length });
//     } finally {
//         await disconnectDatabase();
//     }
// };

// if (require.main === module) {
//     void seedPlans()
//         .then(() => { logger.info('🎉 Plans seed completed successfully.'); process.exit(0); })
//         .catch((error) => {
//             logger.error('❌ Plans seed failed.', { error: error instanceof Error ? error.message : String(error) });
//             process.exit(1);
//         });
// }
