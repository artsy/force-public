/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ShowInfo_Test_QueryVariables = {};
export type ShowInfo_Test_QueryResponse = {
    readonly show: {
        readonly " $fragmentRefs": FragmentRefs<"ShowInfo_show">;
    } | null;
};
export type ShowInfo_Test_Query = {
    readonly response: ShowInfo_Test_QueryResponse;
    readonly variables: ShowInfo_Test_QueryVariables;
};



/*
query ShowInfo_Test_Query {
  show(id: "xxx") {
    ...ShowInfo_show
    id
  }
}

fragment FollowProfileButton_profile on Profile {
  id
  internalID
  is_followed: isFollowed
}

fragment ShowInfoLocation_show on Show {
  fair {
    location {
      address
      address2
      city
      state
      country
      summary
      id
    }
    id
  }
  location {
    display
    address
    address2
    city
    state
    country
    summary
    id
  }
}

fragment ShowInfo_show on Show {
  ...ShowInfoLocation_show
  name
  about: description
  pressRelease(format: HTML)
  hasLocation
  partner {
    __typename
    ... on Partner {
      ...ShowPartnerEntityHeader_partner
      type
    }
    ... on Node {
      id
    }
    ... on ExternalPartner {
      id
    }
  }
}

fragment ShowPartnerEntityHeader_partner on Partner {
  type
  slug
  href
  name
  initials
  locations {
    city
    id
  }
  isDefaultProfilePublic
  profile {
    ...FollowProfileButton_profile
    icon {
      url(version: "square140")
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "xxx"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address2",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "state",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "country",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "summary",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ShowInfo_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ShowInfo_show"
          }
        ],
        "storageKey": "show(id:\"xxx\")"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ShowInfo_Test_Query",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Show",
        "kind": "LinkedField",
        "name": "show",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Fair",
            "kind": "LinkedField",
            "name": "fair",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Location",
                "kind": "LinkedField",
                "name": "location",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Location",
            "kind": "LinkedField",
            "name": "location",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "display",
                "storageKey": null
              },
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/),
          {
            "alias": "about",
            "args": null,
            "kind": "ScalarField",
            "name": "description",
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "HTML"
              }
            ],
            "kind": "ScalarField",
            "name": "pressRelease",
            "storageKey": "pressRelease(format:\"HTML\")"
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "hasLocation",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "partner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v7/*: any*/),
              {
                "kind": "InlineFragment",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "slug",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "href",
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "initials",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Location",
                    "kind": "LinkedField",
                    "name": "locations",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isDefaultProfilePublic",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Profile",
                    "kind": "LinkedField",
                    "name": "profile",
                    "plural": false,
                    "selections": [
                      (v7/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "internalID",
                        "storageKey": null
                      },
                      {
                        "alias": "is_followed",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "isFollowed",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Image",
                        "kind": "LinkedField",
                        "name": "icon",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "version",
                                "value": "square140"
                              }
                            ],
                            "kind": "ScalarField",
                            "name": "url",
                            "storageKey": "url(version:\"square140\")"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "type": "Partner"
              }
            ],
            "storageKey": null
          },
          (v7/*: any*/)
        ],
        "storageKey": "show(id:\"xxx\")"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "ShowInfo_Test_Query",
    "operationKind": "query",
    "text": "query ShowInfo_Test_Query {\n  show(id: \"xxx\") {\n    ...ShowInfo_show\n    id\n  }\n}\n\nfragment FollowProfileButton_profile on Profile {\n  id\n  internalID\n  is_followed: isFollowed\n}\n\nfragment ShowInfoLocation_show on Show {\n  fair {\n    location {\n      address\n      address2\n      city\n      state\n      country\n      summary\n      id\n    }\n    id\n  }\n  location {\n    display\n    address\n    address2\n    city\n    state\n    country\n    summary\n    id\n  }\n}\n\nfragment ShowInfo_show on Show {\n  ...ShowInfoLocation_show\n  name\n  about: description\n  pressRelease(format: HTML)\n  hasLocation\n  partner {\n    __typename\n    ... on Partner {\n      ...ShowPartnerEntityHeader_partner\n      type\n    }\n    ... on Node {\n      id\n    }\n    ... on ExternalPartner {\n      id\n    }\n  }\n}\n\nfragment ShowPartnerEntityHeader_partner on Partner {\n  type\n  slug\n  href\n  name\n  initials\n  locations {\n    city\n    id\n  }\n  isDefaultProfilePublic\n  profile {\n    ...FollowProfileButton_profile\n    icon {\n      url(version: \"square140\")\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd861fc33ae486645f434452cd5a48e50';
export default node;
