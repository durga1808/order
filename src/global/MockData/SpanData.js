export const spanData = [
    {
        "traceId": "1d9349e72cb6279ff97befe54f2e982b",
        "serviceName": "order-project",
        "methodName": "POST /",
        "duration": "120ms",
        "statusCode": "200",
        "spanCount": "5",
        "createdTime": "a few seconds ago",
        "spans": [
            {
                "attributes": [
                    {
                        "key": "net.sock.host.addr",
                        "value": {
                            "intValue": 0,
                            "stringValue": "10.128.0.72"
                        }
                    },
                    {
                        "key": "http.status_code",
                        "value": {
                            "intValue": 204
                        }
                    },
                    {
                        "key": "http.route",
                        "value": {
                            "intValue": 0,
                            "stringValue": "/"
                        }
                    },
                    {
                        "key": "net.sock.host.port",
                        "value": {
                            "intValue": 8080
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 35
                        }
                    },
                    {
                        "key": "net.protocol.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "net.sock.peer.port",
                        "value": {
                            "intValue": 36120
                        }
                    },
                    {
                        "key": "http.method",
                        "value": {
                            "intValue": 0,
                            "stringValue": "POST"
                        }
                    },
                    {
                        "key": "http.scheme",
                        "value": {
                            "intValue": 0,
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "net.protocol.version",
                        "value": {
                            "intValue": 0,
                            "stringValue": "1.1"
                        }
                    },
                    {
                        "key": "user_agent.original",
                        "value": {
                            "intValue": 0,
                            "stringValue": "PostmanRuntime/7.32.3"
                        }
                    },
                    {
                        "key": "net.host.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "personal-details-jvm-opentelemetry-workspace.apps.zagaopenshift.zagaopensource.com"
                        }
                    },
                    {
                        "key": "net.transport",
                        "value": {
                            "intValue": 0,
                            "stringValue": "ip_tcp"
                        }
                    },
                    {
                        "key": "http.target",
                        "value": {
                            "intValue": 0,
                            "stringValue": "/persons"
                        }
                    },
                    {
                        "key": "net.sock.peer.addr",
                        "value": {
                            "intValue": 0,
                            "stringValue": "10.128.0.2"
                        }
                    },
                    {
                        "key": "http.request_content_length",
                        "value": {
                            "intValue": 70
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "vert.x-eventloop-thread-0"
                        }
                    },
                    {
                        "key": "http.client_ip",
                        "value": {
                            "intValue": 0,
                            "stringValue": "192.168.1.2"
                        }
                    }
                ],
                "endTimeUnixNano": "1690183255302412410",
                "kind": 2,
                "name": "POST /",
                "parentSpanId": "",
                "spanId": "7274e2d0a0c75be5",
                "startTimeUnixNano": "1690183247592876000",
                "status": {},
                "traceId": "1d9349e72cb6279ff97befe54f2e982b"
            },
            {
                "attributes": [
                    {
                        "key": "code.namespace",
                        "value": {
                            "intValue": 0,
                            "stringValue": "org.telemeter.Rest.PersonResource_Subclass"
                        }
                    },
                    {
                        "key": "code.function",
                        "value": {
                            "intValue": 0,
                            "stringValue": "createPerson"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 26
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "executor-thread-1"
                        }
                    }
                ],
                "endTimeUnixNano": "1690183255111533861",
                "kind": 1,
                "name": "PersonResource_Subclass.createPerson",
                "parentSpanId": "7274e2d0a0c75be5",
                "spanId": "c77283d02dbe843c",
                "startTimeUnixNano": "1690183249713580345",
                "status": {},
                "traceId": "1d9349e72cb6279ff97befe54f2e982b"
            },
            {
                "attributes": [
                    {
                        "key": "db.connection_string",
                        "value": {
                            "intValue": 0,
                            "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
                        }
                    },
                    {
                        "key": "db.user",
                        "value": {
                            "intValue": 0,
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": 5432
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "intValue": 0,
                            "stringValue": "update person set age=?,name=? where id=?"
                        }
                    },
                    {
                        "key": "db.system",
                        "value": {
                            "intValue": 0,
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "intValue": 0,
                            "stringValue": "person"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "intValue": 0,
                            "stringValue": "UPDATE"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 26
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "executor-thread-1"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "observability-demo-tables"
                        }
                    }
                ],
                "endTimeUnixNano": "1690183255003427197",
                "kind": 3,
                "name": "UPDATE observability-demo-tables.person",
                "parentSpanId": "c77283d02dbe843c",
                "spanId": "36529e406ba99e26",
                "startTimeUnixNano": "1690183254991490755",
                "status": {},
                "traceId": "1d9349e72cb6279ff97befe54f2e982b"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 26
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "executor-thread-1"
                        }
                    }
                ],
                "endTimeUnixNano": "1690183254781013224",
                "kind": 1,
                "name": "Session.merge",
                "parentSpanId": "c77283d02dbe843c",
                "spanId": "be8746b6a9d0a60a",
                "startTimeUnixNano": "1690183251887669140",
                "status": {},
                "traceId": "1d9349e72cb6279ff97befe54f2e982b"
            },
            {
                "attributes": [
                    {
                        "key": "db.connection_string",
                        "value": {
                            "intValue": 0,
                            "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
                        }
                    },
                    {
                        "key": "db.user",
                        "value": {
                            "intValue": 0,
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": 5432
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "intValue": 0,
                            "stringValue": "select p1_0.id,p1_0.age,p1_0.name from person p1_0 where p1_0.id = any (?)"
                        }
                    },
                    {
                        "key": "db.system",
                        "value": {
                            "intValue": 0,
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "intValue": 0,
                            "stringValue": "person"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "intValue": 0,
                            "stringValue": "SELECT"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 26
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "executor-thread-1"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "intValue": 0,
                            "stringValue": "observability-demo-tables"
                        }
                    }
                ],
                "endTimeUnixNano": "1690183254618616962",
                "kind": 3,
                "name": "SELECT observability-demo-tables.person",
                "parentSpanId": "be8746b6a9d0a60a",
                "spanId": "3510586bca5c146c",
                "startTimeUnixNano": "1690183254582299928",
                "status": {},
                "traceId": "1d9349e72cb6279ff97befe54f2e982b"
            },
            
        ]
    }
]