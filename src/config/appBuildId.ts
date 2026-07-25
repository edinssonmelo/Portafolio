declare const __APP_BUILD_ID__: string;

export const appBuildId =
    typeof __APP_BUILD_ID__ !== 'undefined' ? __APP_BUILD_ID__ : 'dev';
