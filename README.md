[![Build Status](https://travis-ci.org/telemark/buddy-minelev-api.svg?branch=master)](https://travis-ci.org/telemark/buddy-minelev-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# buddy-minelev-api

work in progress...

## Testing

Generate testToken

```sh
$ npm run generate
```

```sh
curl -v -H "Authorization: <token>" http://localhost:3000
```

Example result from ```/users/{username}/search/{search}```.

Returns students and which classes the teacher (username) has a relation to.
```js
[
 {
    "firstName": "Helga",
    "middleName": null,
    "lastName": "Durk",
    "fullName": "Helga Durk",
    "personalIdNumber": "02059711111",
    "mobilePhone": "+4798888888",
    "mail": "helgad@hotmail.com",
    "userName": "0205helgdurk",
    "contactTeacher": false,
    "unitId": "BAMVS",
    "unitName": "Bamble vgs. avd. Grasmyr",
    "organizationNumber": "NO974568098",
    "mainGroupName": "BAMVS:3ST",
    "groups": [
      {
        "id": "BAMVS:3ST/151FSP5098",
        "description": "Spansk I+II",
        "unitId": "BAMVS",
        "unitName": "Bamble vgs. avd. Grasmyr",
        "organizationNumber": "NO974568098",
        "contactTeacher": false
      }
    ]
 },
 {
    "firstName": "Halgrim",
    "middleName": "",
    "lastName": "Durk",
    "fullName": "Halgrim Durk",
    "personalIdNumber": "02109911111",
    "mobilePhone": "+4741111111",
    "mail": "halgrimdurk@gmail.com",
    "userName": "0101durk",
    "contactTeacher": true,
    "unitId": "BAMVS",
    "unitName": "Bamble vgs. avd. Grasmyr",
    "organizationNumber": "NO974568098",
    "mainGroupName": "BAMVS:1ST",
    "groups": [
      {
        "id": "BAMVS:1ST/151FSP5091",
        "description": "Spansk I, 1. år",
        "unitId": "BAMVS",
        "unitName": "Bamble vgs. avd. Grasmyr",
        "organizationNumber": "NO974568098",
        "contactTeacher": true
      }
    ]
  }
]
```
