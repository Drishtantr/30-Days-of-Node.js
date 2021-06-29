const apiTest = {
  info: {
    _postman_id: "3e60b884-1205-4a27-bb07-8e82ae6fff48",
    name: "Amadico Uitlites Payments",
    schema:
      "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
  },
  item: [
    {
      name: "administrator",
      item: [
        {
          name: "Users",
          item: [
            {
              name: "Edit Admin Users",
              request: {
                method: "PATCH",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "name",
                      value: "Mohan Krishna Karki",
                      type: "text",
                    },
                    {
                      key: "email",
                      value: "mohan@amadico.com",
                      type: "text",
                    },
                    {
                      key: "dialCode",
                      value: "",
                      type: "text",
                    },
                    {
                      key: "phone",
                      value: "",
                      type: "text",
                    },
                    {
                      key: "address",
                      value: "",
                      type: "text",
                    },
                    {
                      key: "country",
                      value: "",
                      type: "text",
                    },
                    {
                      key: "state",
                      value: "",
                      type: "text",
                    },
                    {
                      key: "city",
                      value: "",
                      type: "text",
                    },
                    {
                      key: "postalCode",
                      value: "",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/users/1",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "users", "1"],
                },
              },
              response: [],
            },
            {
              name: "Create Admin Users",
              request: {
                method: "POST",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "name",
                      value: "Mohan Krishna Karki",
                      description: "Required",
                      type: "text",
                    },
                    {
                      key: "email",
                      value: "developer@amadico.com",
                      description: "Required",
                      type: "text",
                    },
                    {
                      key: "password",
                      value: "emjHNvRs0EmPvmPLL",
                      description: "Required",
                      type: "text",
                    },
                    {
                      key: "confirmPassword",
                      value: "emjHNvRs0EmPvmPLL",
                      description: "Required",
                      type: "text",
                    },
                    {
                      key: "dialCode",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "phone",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "activationKey",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "remberToken",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "passwordResetToken",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "userType",
                      value: "SuperAdmin",
                      description: "Required",
                      type: "text",
                    },
                    {
                      key: "address",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "country",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "state",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "city",
                      value: "",
                      description: "Optional",
                      type: "text",
                    },
                    {
                      key: "postalCode",
                      value: "",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/users",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "users"],
                },
              },
              response: [],
            },
            {
              name: "Admin User Details",
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/administrator/users/2",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "users", "2"],
                },
              },
              response: [],
            },
            {
              name: "Admin Delete Users",
              request: {
                method: "DELETE",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "raw",
                  raw: "",
                  options: {
                    raw: {
                      language: "json",
                    },
                  },
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/users/1",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "users", "1"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Login",
          item: [
            {
              name: "Admin Login",
              request: {
                method: "POST",
                header: [],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "email",
                      value: "developer@amadico.com",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "password",
                      value: "emjHNvRs0EmPvmPLL",
                      description: "required",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/login",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "login"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Services",
          item: [
            {
              name: "Create Services",
              request: {
                method: "POST",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "name",
                      value: "NCELL",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "companyName",
                      value: "NCELL Pvt Ltd",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "vendorCommission",
                      value: "3.90",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "vendorCommissionIsFlat",
                      value: "false",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "customerCommission",
                      value: "2.90",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "customerCommissionIsFlat",
                      value: "false",
                      description: "required",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/services",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "services"],
                },
              },
              response: [],
            },
            {
              name: "Edit Services",
              request: {
                method: "PATCH",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "name",
                      value: "Ncell",
                      type: "text",
                    },
                    {
                      key: "companyName",
                      value: "Ncell Pvt Ltd",
                      type: "text",
                    },
                    {
                      key: "vendorCommission",
                      value: "3.90",
                      type: "text",
                    },
                    {
                      key: "vendorCommissionIsFlat",
                      value: "false",
                      type: "text",
                    },
                    {
                      key: "customerCommission",
                      value: "2",
                      type: "text",
                    },
                    {
                      key: "customerCommissionIsFlat",
                      value: "false",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/services/1",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "services", "1"],
                },
              },
              response: [],
            },
            {
              name: "View Services",
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/administrator/services/3",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "services", "3"],
                },
              },
              response: [],
            },
            {
              name: "Delete Services",
              request: {
                method: "DELETE",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    description: "required",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/administrator/services/3",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "services", "3"],
                },
              },
              response: [],
            },
            {
              name: "Services List",
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/administrator/services",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "services"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Clients",
          item: [
            {
              name: "Create Clients",
              request: {
                method: "POST",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "name",
                      value: "Mohan Krishna Karki",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "companyName",
                      value: "Amadico Pvt Ltd",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "email",
                      value: "admin@amadico.com",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "password",
                      value: "uOZ@yBJuMdrBA%W",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "confirmPassword",
                      value: "uOZ@yBJuMdrBA%W",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "dialCode",
                      value: "+977",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "phone",
                      value: "9813762963",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "address",
                      value: "",
                      description: "optional",
                      type: "text",
                    },
                    {
                      key: "city",
                      value: "",
                      description: "optional",
                      type: "text",
                    },
                    {
                      key: "state",
                      value: "",
                      description: "optional",
                      type: "text",
                    },
                    {
                      key: "postalCode",
                      value: "",
                      description: "optional",
                      type: "text",
                    },
                    {
                      key: "country",
                      value: "Nepal",
                      description: "required",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/merchant",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "merchant"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Balance",
          item: [
            {
              name: "Add Balance",
              request: {
                method: "POST",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "merchantId",
                      value: "1",
                      type: "text",
                    },
                    {
                      key: "amount",
                      value: "50000",
                      type: "text",
                    },
                    {
                      key: "remarks",
                      value: "heloo",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/balance",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "balance"],
                },
              },
              response: [],
            },
            {
              name: "Reverse Balance",
              request: {
                method: "PATCH",
                header: [],
                url: {
                  raw: "{{url}}/api/v1/administrator/balance/reverse/1",
                  host: ["{{url}}"],
                  path: [
                    "api",
                    "v1",
                    "administrator",
                    "balance",
                    "reverse",
                    "1",
                  ],
                },
              },
              response: [],
            },
            {
              name: "Check Balance",
              protocolProfileBehavior: {
                disableBodyPruning: true,
              },
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "merchantId",
                      value: "1",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/balance/checkBalance",
                  host: ["{{url}}"],
                  path: [
                    "api",
                    "v1",
                    "administrator",
                    "balance",
                    "checkBalance",
                  ],
                },
              },
              response: [],
            },
            {
              name: "Check Balance History",
              protocolProfileBehavior: {
                disableBodyPruning: true,
              },
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "merchantId",
                      value: "1",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/administrator/balance/history",
                  host: ["{{url}}"],
                  path: ["api", "v1", "administrator", "balance", "history"],
                },
              },
              response: [],
            },
          ],
        },
      ],
    },
    {
      name: "Merchant ( Customers or Clients)",
      item: [
        {
          name: "Application Key",
          item: [
            {
              name: "Create Application Key",
              request: {
                method: "POST",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "applicationKey",
                      value: "",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/merchant/applicationKey",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "applicationKey"],
                },
              },
              response: [],
            },
            {
              name: "Update Application Key",
              request: {
                method: "PATCH",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/merchant/applicationKey/2",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "applicationKey", "2"],
                },
              },
              response: [],
            },
            {
              name: "Get Application Details",
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/merchant/applicationKey/1",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "applicationKey", "1"],
                },
              },
              response: [],
            },
            {
              name: "Delete Application Key",
              request: {
                method: "DELETE",
                header: [
                  {
                    key: "token",
                    value: "{{token}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/merchant/applicationKey/1",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "applicationKey", "1"],
                },
              },
              response: [],
            },
            {
              name: "Get All Application Key",
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/merchant/applicationKey",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "applicationKey"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Login",
          item: [
            {
              name: "Merchant Login",
              request: {
                method: "POST",
                header: [],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "email",
                      value: "admin@amadico.com",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "password",
                      value: "uOZ@yBJuMdrBA%W",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/merchant/login",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "login"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Services",
          item: [
            {
              name: "Get Services List",
              request: {
                method: "GET",
                header: [
                  {
                    key: "token",
                    value: "{{merchantToken}}",
                    type: "text",
                  },
                ],
                url: {
                  raw: "{{url}}/api/v1/merchant/services",
                  host: ["{{url}}"],
                  path: ["api", "v1", "merchant", "services"],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Utilities",
          item: [
            {
              name: "Mobile Topup",
              request: {
                method: "POST",
                header: [
                  {
                    key: "applicationKey",
                    type: "text",
                    value: "{{merchantApplicationKey}}",
                  },
                  {
                    key: "token",
                    type: "text",
                    value: "{{merchantToken}}",
                  },
                ],
                body: {
                  mode: "urlencoded",
                  urlencoded: [
                    {
                      key: "serviceCode",
                      value: "ncell",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "phoneNumber",
                      value: "9813762963",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "refrenceNumber",
                      value: "{{$randomInt}}",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "amount",
                      value: "200",
                      description: "required",
                      type: "text",
                    },
                    {
                      key: "hash",
                      value:
                        "a87b621f6b079a80e859df30dd6442f7e2d5e085b717b8db078c64f9e7783cc4030aecaa67261063ad1ca1c5bc1c697398d2eea1b04f89d9f4e9d5addff73f85",
                      description:
                        "Generate Hash Key Using Parameters Examples : ServicesCode ,PhoneNumber,referenceNumber,Amount",
                      type: "text",
                    },
                  ],
                },
                url: {
                  raw: "{{url}}/api/v1/merchant/transactions/mobileTopup",
                  host: ["{{url}}"],
                  path: [
                    "api",
                    "v1",
                    "merchant",
                    "transactions",
                    "mobileTopup",
                  ],
                },
              },
              response: [],
            },
          ],
        },
        {
          name: "Testing",
          request: {
            method: "GET",
            header: [],
            url: {
              raw: "",
            },
          },
          response: [],
        },
      ],
    },
  ],
};

const item1 = apiTest.item[0].item[0].item[0].request.body.urlencoded[0];
console.log(item1);

const key = apiTest.item[0].item[0].item[0].request.body.urlencoded[0].key;
console.log(key);

const value = apiTest.item[0].item[0].item[0].request.body.urlencoded[0].value;
console.log(value);

const type = apiTest.item[0].item[0].item[0].request.body.urlencoded[0].type;
console.log(type);
