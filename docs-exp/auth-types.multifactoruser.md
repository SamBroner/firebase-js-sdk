<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/auth-types](./auth-types.md) &gt; [MultiFactorUser](./auth-types.multifactoruser.md)

## MultiFactorUser interface

An interface that defines the multi-factor related properties and operations pertaining to a [User](./auth-types.user.md)<!-- -->.

<b>Signature:</b>

```typescript
export interface MultiFactorUser 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [enrolledFactors](./auth-types.multifactoruser.enrolledfactors.md) | [MultiFactorInfo](./auth-types.multifactorinfo.md)<!-- -->\[\] | Returns a list of the user's enrolled second factors. |

## Methods

|  Method | Description |
|  --- | --- |
|  [enroll(assertion, displayName)](./auth-types.multifactoruser.enroll.md) | Enrolls a second factor as identified by the [MultiFactorAssertion](./auth-types.multifactorassertion.md) for the user. |
|  [getSession()](./auth-types.multifactoruser.getsession.md) | Returns the session identifier for a second factor enrollment operation. This is used to identify the user trying to enroll a second factor. |
|  [unenroll(option)](./auth-types.multifactoruser.unenroll.md) | Unenrolls the specified second factor. |

