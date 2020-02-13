/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AuthProvider, ProviderId, SignInMethod } from '../providers';
import { OAuthCredential } from '../strategies/auth_credential';
import { UserCredential } from '../../model/user_credential';
import { AuthErrorCode } from '../errors';
import { OAuthProvider, CustomParameters } from './oauth';

export class GithubAuthProvider extends OAuthProvider {
  static readonly PROVIDER_ID = ProviderId.GITHUB;
  static readonly GITHUB_SIGN_IN_METHOD = SignInMethod.GITHUB;
  readonly providerId: ProviderId = GithubAuthProvider.PROVIDER_ID;
  static credential(accessToken: string): OAuthCredential {
    throw new Error('not implemented');
  }
  static credentialFromResult(
    userCredential: UserCredential
  ): OAuthCredential | null {
    throw new Error('not implemented');
  }
  static credentialFromError(error: AuthErrorCode): OAuthCredential | null {
    throw new Error('not implemented');
  }
  static credentialFromJSON(json: object): OAuthCredential {
    throw new Error('not implemented');
  }
  setCustomParameters(customOAuthParameters: CustomParameters): AuthProvider {
    throw new Error('not implemented');
  }
  getCustomParameters(): CustomParameters {
    return {};
  }
}