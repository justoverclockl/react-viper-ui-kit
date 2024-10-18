/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: { '^.+.tsx?$': ['ts-jest', {}] },
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/src/$1',
        '^@components/(.*)$': '<rootDir>/lib/components/$1',
        '^@utils/(.*)$': '<rootDir>/lib/utils/$1',
        '^@hooks/(.*)$': '<rootDir>/lib/hooks/$1',
    },
};
