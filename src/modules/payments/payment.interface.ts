export const PaymentType = {
    NEW_SUBSCRIPTION: 'new_subscription',
    UPGRADE: 'upgrade',
    RENEWAL: 'renewal',
} as const;

export type PaymentTypeValue = (typeof PaymentType)[keyof typeof PaymentType];
