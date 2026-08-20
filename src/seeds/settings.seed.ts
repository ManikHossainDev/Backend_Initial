import { SettingModel } from '@/modules/settings/settings.model';
import { logger } from '@/infrastructure/logger/winston.logger';
import { connectDatabase, disconnectDatabase } from '@/infrastructure/database/mongoose.connection';

const settings = [
    {
        slug: 'privacy_policy',
        title: 'Privacy Policy',
        content: '<p>Your privacy is important to us. This privacy policy outlines how we collect, use, and protect your personal information.</p>',
        isPublic: true,
    },
    {
        slug: 'terms_and_conditions',
        title: 'Terms and Conditions',
        content: '<p>These terms and conditions govern your use of our platform. By using our services, you agree to these terms.</p>',
        isPublic: true,
    },
    {
        slug: 'about_us',
        title: 'About Us',
        content: '<p>We are a leading platform for property claims management, dedicated to providing fast and reliable service to landlords, homeowners, and renters.</p>',
        isPublic: true,
    },
    {
        slug: 'delete_instructions',
        title: 'Account Deletion Instructions',
        content: '<p>To delete your account, please follow these steps: 1. Go to Profile Settings. 2. Click on Delete Account. 3. Confirm your decision. Your data will be permanently removed within 30 days.</p><img src="/uploads/delete-account-guide.png" alt="Account deletion guide" />',
        isPublic: true,
    },
    {
        slug: 'app_info',
        title: 'App Information',
        content: '',
        isPublic: true,
        metadata: {
            emails: 'info@drft.com,support@drft.com',
            phones: '+10000000000,+10000000001',
            address: '123 Main Street, New York, NY 10001',
        },
    },
];

export const seedSettings = async (): Promise<void> => {
    await connectDatabase();

    try {
        for (const setting of settings) {
            await SettingModel.findOneAndUpdate(
                { slug: setting.slug },
                setting,
                { upsert: true, new: true },
            );
        }
        logger.info('✅ Settings seeded successfully', { count: settings.length });
    } finally {
        await disconnectDatabase();
    }
};

if (require.main === module) {
    void seedSettings()
        .then(() => { logger.info('🎉 Settings seed completed successfully.'); process.exit(0); })
        .catch((error) => {
            logger.error('❌ Settings seed failed.', { error: error instanceof Error ? error.message : String(error) });
            process.exit(1);
        });
}
