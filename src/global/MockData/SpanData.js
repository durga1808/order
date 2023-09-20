export const spanData = [
    {
        "id": "650a8ca8ce15f570fd43db7e",
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
            }
        ]
    },
    {
        "id": "650a8ca8ce15f570fd43db7e",
        "createdTime": "1690183254991490755",
        "duration": "CalculatedDuration",
        "methodName": "UPDATE observability-demo-tables.person",
        "serviceName": "personal-details-jvm",
        "spanCount": "2",
        "spans": [
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
                        "key": "code.namespace",
                        "value": {
                            "stringValue": "org.telemeter.Rest.PersonResource_Subclass"
                        }
                    },
                    {
                        "key": "code.function",
                        "value": {
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
                        "key": "net.sock.host.addr",
                        "value": {
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
                            "stringValue": "POST"
                        }
                    },
                    {
                        "key": "http.scheme",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "net.protocol.version",
                        "value": {
                            "stringValue": "1.1"
                        }
                    },
                    {
                        "key": "user_agent.original",
                        "value": {
                            "stringValue": "PostmanRuntime/7.32.3"
                        }
                    },
                    {
                        "key": "net.host.name",
                        "value": {
                            "stringValue": "personal-details-jvm-opentelemetry-workspace.apps.zagaopenshift.zagaopensource.com"
                        }
                    },
                    {
                        "key": "net.transport",
                        "value": {
                            "stringValue": "ip_tcp"
                        }
                    },
                    {
                        "key": "http.target",
                        "value": {
                            "stringValue": "/persons"
                        }
                    },
                    {
                        "key": "net.sock.peer.addr",
                        "value": {
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
                            "stringValue": "vert.x-eventloop-thread-0"
                        }
                    },
                    {
                        "key": "http.client_ip",
                        "value": {
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
                        "key": "db.connection_string",
                        "value": {
                            "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
                        }
                    },
                    {
                        "key": "db.user",
                        "value": {
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
                            "stringValue": "select p1_0.id,p1_0.age,p1_0.name from person p1_0 where p1_0.id = any (?)"
                        }
                    },
                    {
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "person"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
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
                            "stringValue": "executor-thread-1"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
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
            {
                "attributes": [
                    {
                        "key": "db.connection_string",
                        "value": {
                            "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
                        }
                    },
                    {
                        "key": "db.user",
                        "value": {
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
                            "stringValue": "update person set age=?,name=? where id=?"
                        }
                    },
                    {
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "person"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
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
                            "stringValue": "executor-thread-1"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
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
            }
        ],
        "statusCode": "0",
        "traceId": "1d9349e72cb6279ff97befe54f2e982b"
    },
    {
        "id": "650a91cdce15f570fd43db81",
        "createdTime": "1690183254991490755",
        "duration": "CalculatedDuration",
        "methodName": "POST",
        "serviceName": "personal-details-jvm",
        "spanCount": "2",
        "spans": [
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
                        "key": "code.namespace",
                        "value": {
                            "stringValue": "org.telemeter.Rest.PersonResource_Subclass"
                        }
                    },
                    {
                        "key": "code.function",
                        "value": {
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
                        "key": "net.sock.host.addr",
                        "value": {
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
                            "stringValue": "POST"
                        }
                    },
                    {
                        "key": "http.scheme",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "net.protocol.version",
                        "value": {
                            "stringValue": "1.1"
                        }
                    },
                    {
                        "key": "user_agent.original",
                        "value": {
                            "stringValue": "PostmanRuntime/7.32.3"
                        }
                    },
                    {
                        "key": "net.host.name",
                        "value": {
                            "stringValue": "personal-details-jvm-opentelemetry-workspace.apps.zagaopenshift.zagaopensource.com"
                        }
                    },
                    {
                        "key": "net.transport",
                        "value": {
                            "stringValue": "ip_tcp"
                        }
                    },
                    {
                        "key": "http.target",
                        "value": {
                            "stringValue": "/persons"
                        }
                    },
                    {
                        "key": "net.sock.peer.addr",
                        "value": {
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
                            "stringValue": "vert.x-eventloop-thread-0"
                        }
                    },
                    {
                        "key": "http.client_ip",
                        "value": {
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
                        "key": "db.connection_string",
                        "value": {
                            "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
                        }
                    },
                    {
                        "key": "db.user",
                        "value": {
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
                            "stringValue": "select p1_0.id,p1_0.age,p1_0.name from person p1_0 where p1_0.id = any (?)"
                        }
                    },
                    {
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "person"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
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
                            "stringValue": "executor-thread-1"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
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
            {
                "attributes": [
                    {
                        "key": "db.connection_string",
                        "value": {
                            "stringValue": "postgresql://dev-postgres-primary.postgresql-workspace.svc:5432"
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "stringValue": "dev-postgres-primary.postgresql-workspace.svc"
                        }
                    },
                    {
                        "key": "db.user",
                        "value": {
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
                            "stringValue": "update person set age=?,name=? where id=?"
                        }
                    },
                    {
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "person"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
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
                            "stringValue": "executor-thread-1"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
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
            }
        ],
        "statusCode": "204",
        "traceId": "1d9349e72cb6279ff97befe54f2e982b"
    },
    {
        "id": "650a97af68c648190efb8294",
        "duration": "CalculatedDuration",
        "methodName": "POST",
        "serviceName": "personal-details-jvm",
        "spanCount": "2",
        "spans": [
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
            }
        ],
        "statusCode": "204",
        "traceId": "1d9349e72cb6279ff97befe54f2e982b"
    },
    {
        "id": "650a98b768c648190efb8297",
        "createdTime": "created time",
        "duration": "CalculatedDuration",
        "methodName": "POST",
        "serviceName": "personal-details-jvm",
        "spanCount": "2",
        "spans": [
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
            }
        ],
        "statusCode": "204",
        "traceId": "1d9349e72cb6279ff97befe54f2e982b"
    },
    {
        "id": "650aab582f3b787a97d7c753",
        "createdTime": "1695197985898108574",
        "duration": "CalculatedDuration",
        "methodName": "GET",
        "serviceName": "vendor-project",
        "spanCount": "2",
        "spans": [
            {
                "attributes": [
                    {
                        "key": "net.sock.peer.port",
                        "value": {
                            "intValue": 51766
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 274
                        }
                    },
                    {
                        "key": "net.sock.host.port",
                        "value": {
                            "intValue": 8080
                        }
                    },
                    {
                        "key": "http.route",
                        "value": {
                            "stringValue": "/vendor/vendorGetDataFromExternalApi"
                        }
                    },
                    {
                        "key": "net.sock.host.addr",
                        "value": {
                            "stringValue": "10.128.0.101"
                        }
                    },
                    {
                        "key": "net.protocol.name",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "http.scheme",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "http.status_code",
                        "value": {
                            "intValue": 500
                        }
                    },
                    {
                        "key": "net.protocol.version",
                        "value": {
                            "stringValue": "1.1"
                        }
                    },
                    {
                        "key": "http.method",
                        "value": {
                            "stringValue": "GET"
                        }
                    },
                    {
                        "key": "user_agent.original",
                        "value": {
                            "stringValue": "PostmanRuntime/7.32.3"
                        }
                    },
                    {
                        "key": "net.host.name",
                        "value": {
                            "stringValue": "vendor-project-observability-workspace.apps.zagaopenshift.zagaopensource.com"
                        }
                    },
                    {
                        "key": "http.target",
                        "value": {
                            "stringValue": "/vendor/vendorGetDataFromExternalApi?id=1"
                        }
                    },
                    {
                        "key": "net.sock.peer.addr",
                        "value": {
                            "stringValue": "10.128.0.2"
                        }
                    },
                    {
                        "key": "http.client_ip",
                        "value": {
                            "stringValue": "192.168.1.2"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695197985904368228",
                "events": [
                    {
                        "name": "exception",
                        "timeUnixNano": "1695197985902794161"
                    }
                ],
                "kind": 2,
                "name": "GET /vendor/vendorGetDataFromExternalApi",
                "parentSpanId": "",
                "spanId": "576a05e4d9067d12",
                "startTimeUnixNano": "1695197985829397000",
                "status": {
                    "code": 2
                },
                "traceId": "51e9a9bd3ad9f899245983fe1b40f77f"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 274
                        }
                    },
                    {
                        "key": "net.peer.name",
                        "value": {
                            "stringValue": "order-project.observability-workspace.svc.cluster.local"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": 5089
                        }
                    },
                    {
                        "key": "http.response_content_length",
                        "value": {
                            "intValue": 0
                        }
                    },
                    {
                        "key": "net.protocol.name",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "http.url",
                        "value": {
                            "stringValue": "http://order-project.observability-workspace.svc.cluster.local:5089/orders/getOrders?id=1"
                        }
                    },
                    {
                        "key": "http.status_code",
                        "value": {
                            "intValue": 404
                        }
                    },
                    {
                        "key": "net.protocol.version",
                        "value": {
                            "stringValue": "1.1"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    },
                    {
                        "key": "http.method",
                        "value": {
                            "stringValue": "GET"
                        }
                    }
                ],
                "endTimeUnixNano": "1695197985879788073",
                "kind": 3,
                "name": "GET",
                "parentSpanId": "6caa4cba8a49dbc2",
                "spanId": "d6fb69e248278b39",
                "startTimeUnixNano": "1695197985838338839",
                "status": {
                    "code": 2
                },
                "traceId": "51e9a9bd3ad9f899245983fe1b40f77f"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 274
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695197985888032672",
                "events": [
                    {
                        "name": "exception",
                        "timeUnixNano": "1695197985887985737"
                    }
                ],
                "kind": 1,
                "name": "VendorController.getOrderDetailsFromExternalAPI",
                "parentSpanId": "576a05e4d9067d12",
                "spanId": "6caa4cba8a49dbc2",
                "startTimeUnixNano": "1695197985833843888",
                "status": {
                    "code": 2
                },
                "traceId": "51e9a9bd3ad9f899245983fe1b40f77f"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": 274
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695197985901590848",
                "kind": 1,
                "name": "BasicErrorController.error",
                "parentSpanId": "576a05e4d9067d12",
                "spanId": "ac9ed5d06315d911",
                "startTimeUnixNano": "1695197985898108574",
                "status": {},
                "traceId": "51e9a9bd3ad9f899245983fe1b40f77f"
            }
        ],
        "statusCode": "500",
        "traceId": "51e9a9bd3ad9f899245983fe1b40f77f"
    }
]