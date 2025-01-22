import values from 'lodash/values';

export enum NavigableRoute {
  APP_STACK = 'APP_STACK',
  HOME_STACK = 'HOME_STACK',
  CONTENT_READER = 'CONTENT_READER',
  HOME = 'HOME',
  ONBOARDING_STACK = 'ONBOARDING_STACK',
  ONBOARDING_NAV = 'ONBOARDING_NAV',
  WELCOME_VIDEO = 'WELCOME_VIDEO',
  ONBOARDING_LANDING = 'ONBOARDING_LANDING',
  ONBOARDING_WIZARD = 'ONBOARDING_WIZARD',
  EMAIL_SIGNIN = 'EMAIL_SIGNIN',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
  BIOMETRICS = 'BIOMETRICS',
  NOTIFICATION_PERMISSIONS = 'NOTIFICATION_PERMISSIONS',
  EMAIL_PREFERENCES = 'EMAIL_PREFERENCES',
  LOGIN_HELP = 'LOGIN_HELP',
  LOCATION_PERMISSIONS = 'LOCATION_PERMISSIONS',
  LOCATION_REQUEST = 'LOCATION_REQUEST',
  PUSHNOTIFICATION_REQUEST = 'PUSHNOTIFICATION_REQUEST',
}

export const navigableRoutes: string[] = values(NavigableRoute);
