const dummyData = {
    "id": "15A7EC5D-4733-ED11-A27C-E42AAC61C092",
    "createdAt": "2022-09-13T09:35:14.013Z",
    "updatedAt": "2022-09-13T12:07:34.360Z",
    "createdBy": "kristin.eliassen@neptune-software.com",
    "changedBy": "kristin.eliassen@neptune-software.com",
    "tasks": [
        {
            "id": "object-a2b88293-dabb-4107-f9a3-19aeda26bdad",
            "taskType": "UserTask",
            "inboxApp": "mktplace_reviews_wfinbox",
            "title": "Approve review",
            "subTitle": "",
            "userDeterminationLocal": "E39AD325-5C33-ED11-A27C-E42AAC61C092",
            "taskAction": "BA7232F9-5B33-ED11-A27C-E42AAC61C092",
            "scriptId": "",
            "runScriptInFork": false,
            "customApproverScript": "",
            "enableForward": false,
            "enableQuery": false,
            "enableNotification": false,
            "taskNotification": "",
            "senderEmail": "",
            "enableSave": false,
            "enableApprove": true,
            "enableReject": true,
            "rejectTask": "object-ee0d18e5-f56c-43a6-edb2-587cfaf3064b",
            "rejectTaskType": "Cancel",
            "rejectLabel": "Reject",
            "rejectButtonType": "Reject",
            "approveTask": "object-67ac9c71-b2d8-4ccf-f6a8-2b8b5ccb640e",
            "approveTaskType": "ScriptTask",
            "approveLabel": "Approve",
            "approveButtonType": "Accept"
        },
        {
            "id": "object-67ac9c71-b2d8-4ccf-f6a8-2b8b5ccb640e",
            "taskType": "ScriptTask",
            "inboxApp": "",
            "title": "Set review to approved in DB",
            "subTitle": "",
            "userDeterminationLocal": "",
            "taskAction": "",
            "scriptId": "284F9A1E-5033-ED11-A27C-E42AAC61C092",
            "runScriptInFork": false,
            "customApproverScript": "",
            "enableForward": false,
            "enableQuery": false,
            "enableNotification": false,
            "taskNotification": "",
            "senderEmail": "",
            "enableSave": false,
            "enableApprove": false,
            "enableReject": false,
            "scriptTask": "object-4914eefe-9204-4cf5-e69e-8a8bb1514eab",
            "scriptTaskType": "Completed"
        }
    ],
    "translation": [],
    "flowEditor": {
        "objects": [
            {
                "id": "object-0d97f772-f3fc-4966-a2a3-135c8e240894",
                "name": "Start",
                "description": "",
                "templateId": "Start",
                "templateName": "Start",
                "typeCSS": "start",
                "typeImage": "start",
                "group": "",
                "input": [],
                "object": {},
                "output": [
                    {
                        "name": "output",
                        "value": "",
                        "grouping": "Output",
                        "parent": "Output",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "output-8e40a640-2ad7-44d0-b67c-a3aaa6c7172f"
                    }
                ],
                "connections": [
                    {
                        "id": "link-31c09617-2343-48f9-e986-1ceee5b4e4dd",
                        "source": "output-8e40a640-2ad7-44d0-b67c-a3aaa6c7172f",
                        "target": "input-db99382e-028c-41fd-e454-069c9cc11eee"
                    }
                ],
                "posX": 547.5,
                "posY": 42
            },
            {
                "id": "object-eccf6272-0978-4536-ecfe-2a54b47765f6",
                "name": "Approve",
                "description": "",
                "templateId": "Approve",
                "templateName": "Approve",
                "typeCSS": "approve",
                "typeImage": "action",
                "actionLabel": "Approve",
                "actionButtonType": "Accept",
                "group": "useraction",
                "input": [
                    {
                        "name": "input",
                        "value": "",
                        "grouping": "Input",
                        "parent": "Input",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "input-1d75e3ac-4319-4261-d18e-7ab8b5c3d8ce"
                    }
                ],
                "object": {},
                "output": [
                    {
                        "name": "output",
                        "value": "",
                        "grouping": "Output",
                        "parent": "Output",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "output-d65026e6-299c-4f18-d3b7-ded43d87b5ec"
                    }
                ],
                "connections": [
                    {
                        "id": "link-cb0c1ed1-2c22-4598-970a-8b684f5c541b",
                        "source": "output-d65026e6-299c-4f18-d3b7-ded43d87b5ec",
                        "target": "input-56cdf794-5854-401d-e52c-b8d7d6ffa154"
                    },
                    {
                        "id": "link-6c100897-8cad-4232-be7f-e62baf5e005a",
                        "source": "output-b859f396-5b16-433a-9b65-d44ace8a2b01",
                        "target": "input-1d75e3ac-4319-4261-d18e-7ab8b5c3d8ce"
                    }
                ],
                "posX": 837,
                "posY": 331
            },
            {
                "id": "object-556188ad-4179-41ec-e843-5b43ba3eb6ca",
                "name": "Reject",
                "description": "",
                "templateId": "Reject",
                "templateName": "Reject",
                "actionLabel": "Reject",
                "actionButtonType": "Reject",
                "typeCSS": "reject",
                "typeImage": "action",
                "group": "useraction",
                "input": [
                    {
                        "name": "input",
                        "value": "",
                        "grouping": "Input",
                        "parent": "Input",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "input-f2b08737-0f9d-43a3-eb60-acd0021e9400"
                    }
                ],
                "object": {},
                "output": [
                    {
                        "name": "output",
                        "value": "",
                        "grouping": "Output",
                        "parent": "Output",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "output-70ca587f-1ef1-4ced-b4df-0768c04f3787"
                    }
                ],
                "connections": [
                    {
                        "id": "link-24bb4323-706a-4d31-babc-d010b7ec8c2b",
                        "source": "output-70ca587f-1ef1-4ced-b4df-0768c04f3787",
                        "target": "input-11b329a8-fe98-43bb-aa60-6347e655bcab"
                    },
                    {
                        "id": "link-0dcd01e3-2223-4fc6-8eeb-81b0e7523408",
                        "source": "output-b859f396-5b16-433a-9b65-d44ace8a2b01",
                        "target": "input-f2b08737-0f9d-43a3-eb60-acd0021e9400"
                    }
                ],
                "posX": 265,
                "posY": 332
            },
            {
                "id": "object-67ac9c71-b2d8-4ccf-f6a8-2b8b5ccb640e",
                "name": "Set review to approved in DB",
                "description": "",
                "templateId": "ScriptTask",
                "templateName": "Script Task",
                "typeCSS": "scripttask",
                "typeImage": "task",
                "group": "task",
                "input": [
                    {
                        "name": "input",
                        "value": "",
                        "grouping": "Input",
                        "parent": "Input",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "input-56cdf794-5854-401d-e52c-b8d7d6ffa154"
                    }
                ],
                "object": {},
                "output": [
                    {
                        "name": "output",
                        "value": "",
                        "grouping": "Output",
                        "parent": "Output",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "output-e36c7d7c-d717-4447-d529-8a05b2a4967c"
                    }
                ],
                "connections": [
                    {
                        "id": "link-cb0c1ed1-2c22-4598-970a-8b684f5c541b",
                        "source": "output-d65026e6-299c-4f18-d3b7-ded43d87b5ec",
                        "target": "input-56cdf794-5854-401d-e52c-b8d7d6ffa154"
                    },
                    {
                        "id": "link-1e369685-6fff-4a82-fd51-a866db76b339",
                        "source": "output-e36c7d7c-d717-4447-d529-8a05b2a4967c",
                        "target": "input-4e736820-55dd-429d-8ea0-eabe4574f495"
                    }
                ],
                "posX": 840.03271484375,
                "posY": 511.89105224609375,
                "scriptId": "284F9A1E-5033-ED11-A27C-E42AAC61C092"
            },
            {
                "id": "object-ee0d18e5-f56c-43a6-edb2-587cfaf3064b",
                "name": "Cancel",
                "description": "",
                "templateId": "Cancel",
                "templateName": "Cancel",
                "typeCSS": "cancel",
                "typeImage": "exit",
                "group": "event",
                "input": [
                    {
                        "name": "input",
                        "value": "",
                        "grouping": "Input",
                        "parent": "Input",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "input-11b329a8-fe98-43bb-aa60-6347e655bcab"
                    }
                ],
                "object": {},
                "output": [],
                "connections": [
                    {
                        "id": "link-24bb4323-706a-4d31-babc-d010b7ec8c2b",
                        "source": "output-70ca587f-1ef1-4ced-b4df-0768c04f3787",
                        "target": "input-11b329a8-fe98-43bb-aa60-6347e655bcab"
                    }
                ],
                "posX": 266.2358703613281,
                "posY": 492.2709045410156
            },
            {
                "id": "object-4914eefe-9204-4cf5-e69e-8a8bb1514eab",
                "name": "Completed",
                "description": "",
                "templateId": "Completed",
                "templateName": "Completed",
                "typeCSS": "completed",
                "typeImage": "exit",
                "group": "event",
                "input": [
                    {
                        "name": "input",
                        "value": "",
                        "grouping": "Input",
                        "parent": "Input",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "input-4e736820-55dd-429d-8ea0-eabe4574f495"
                    }
                ],
                "object": {},
                "output": [],
                "connections": [
                    {
                        "id": "link-1e369685-6fff-4a82-fd51-a866db76b339",
                        "source": "output-e36c7d7c-d717-4447-d529-8a05b2a4967c",
                        "target": "input-4e736820-55dd-429d-8ea0-eabe4574f495"
                    }
                ],
                "posX": 841.4352416992188,
                "posY": 640.87255859375
            },
            {
                "id": "object-a2b88293-dabb-4107-f9a3-19aeda26bdad",
                "name": "Approve review",
                "description": "",
                "templateId": "UserTask",
                "templateName": "User Task",
                "typeCSS": "usertask",
                "typeImage": "task",
                "group": "task",
                "input": [
                    {
                        "name": "input",
                        "value": "",
                        "grouping": "Input",
                        "parent": "Input",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "input-db99382e-028c-41fd-e454-069c9cc11eee"
                    }
                ],
                "object": {},
                "output": [
                    {
                        "name": "output",
                        "value": "",
                        "grouping": "Output",
                        "parent": "Output",
                        "show_script": false,
                        "show_label": false,
                        "show_button": false,
                        "id": "output-b859f396-5b16-433a-9b65-d44ace8a2b01"
                    }
                ],
                "connections": [
                    {
                        "id": "link-31c09617-2343-48f9-e986-1ceee5b4e4dd",
                        "source": "output-8e40a640-2ad7-44d0-b67c-a3aaa6c7172f",
                        "target": "input-db99382e-028c-41fd-e454-069c9cc11eee"
                    },
                    {
                        "id": "link-0dcd01e3-2223-4fc6-8eeb-81b0e7523408",
                        "source": "output-b859f396-5b16-433a-9b65-d44ace8a2b01",
                        "target": "input-f2b08737-0f9d-43a3-eb60-acd0021e9400"
                    },
                    {
                        "id": "link-6c100897-8cad-4232-be7f-e62baf5e005a",
                        "source": "output-b859f396-5b16-433a-9b65-d44ace8a2b01",
                        "target": "input-1d75e3ac-4319-4261-d18e-7ab8b5c3d8ce"
                    }
                ],
                "posX": 562.428131023145,
                "posY": 171.8171571707496,
                "inboxApp": "mktplace_reviews_wfinbox",
                "userDeterminationLocal": "E39AD325-5C33-ED11-A27C-E42AAC61C092",
                "taskAction": "BA7232F9-5B33-ED11-A27C-E42AAC61C092"
            }
        ],
        "connections": [
            {
                "id": "link-cb0c1ed1-2c22-4598-970a-8b684f5c541b",
                "source": "output-d65026e6-299c-4f18-d3b7-ded43d87b5ec",
                "sourceNode": "object-eccf6272-0978-4536-ecfe-2a54b47765f6",
                "target": "input-56cdf794-5854-401d-e52c-b8d7d6ffa154",
                "targetNode": "object-67ac9c71-b2d8-4ccf-f6a8-2b8b5ccb640e"
            },
            {
                "id": "link-24bb4323-706a-4d31-babc-d010b7ec8c2b",
                "source": "output-70ca587f-1ef1-4ced-b4df-0768c04f3787",
                "sourceNode": "object-556188ad-4179-41ec-e843-5b43ba3eb6ca",
                "target": "input-11b329a8-fe98-43bb-aa60-6347e655bcab",
                "targetNode": "object-ee0d18e5-f56c-43a6-edb2-587cfaf3064b"
            },
            {
                "id": "link-1e369685-6fff-4a82-fd51-a866db76b339",
                "source": "output-e36c7d7c-d717-4447-d529-8a05b2a4967c",
                "sourceNode": "object-67ac9c71-b2d8-4ccf-f6a8-2b8b5ccb640e",
                "target": "input-4e736820-55dd-429d-8ea0-eabe4574f495",
                "targetNode": "object-4914eefe-9204-4cf5-e69e-8a8bb1514eab"
            },
            {
                "id": "link-31c09617-2343-48f9-e986-1ceee5b4e4dd",
                "source": "output-8e40a640-2ad7-44d0-b67c-a3aaa6c7172f",
                "sourceNode": "object-0d97f772-f3fc-4966-a2a3-135c8e240894",
                "target": "input-db99382e-028c-41fd-e454-069c9cc11eee",
                "targetNode": "object-a2b88293-dabb-4107-f9a3-19aeda26bdad"
            },
            {
                "id": "link-0dcd01e3-2223-4fc6-8eeb-81b0e7523408",
                "source": "output-b859f396-5b16-433a-9b65-d44ace8a2b01",
                "sourceNode": "object-a2b88293-dabb-4107-f9a3-19aeda26bdad",
                "target": "input-f2b08737-0f9d-43a3-eb60-acd0021e9400",
                "targetNode": "object-556188ad-4179-41ec-e843-5b43ba3eb6ca"
            },
            {
                "id": "link-6c100897-8cad-4232-be7f-e62baf5e005a",
                "source": "output-b859f396-5b16-433a-9b65-d44ace8a2b01",
                "sourceNode": "object-a2b88293-dabb-4107-f9a3-19aeda26bdad",
                "target": "input-1d75e3ac-4319-4261-d18e-7ab8b5c3d8ce",
                "targetNode": "object-eccf6272-0978-4536-ecfe-2a54b47765f6"
            }
        ]
    },
    "title": "marketplaceReviews",
    "subTitle": "Approve or reject Marketplace reviews",
    "daysUntilOverdue": 1,
    "daysNotificationInterval": null,
    "enableNotifications": false,
    "omitFriday": false,
    "omitSaturday": false,
    "omitSunday": false,
    "icon": null,
    "ver": "22.9.13.127",
    "package": null
}