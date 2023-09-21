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
            },
        ]
    },
    {
        "createdTime": "4 seconds ago",
        "duration": "18ms",
        "methodName": "GET",
        "serviceName": "vendor-project",
        "spanCount": "10",
        "spans": [
            {
                "attributes": [
                    {
                        "key": "net.sock.peer.port",
                        "value": {
                            "intValue": "42972"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
                    {
                        "key": "net.sock.host.port",
                        "value": {
                            "intValue": "8080"
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
                            "intValue": "200"
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
                            "stringValue": "192.168.1.8"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879468608323",
                "kind": 2,
                "name": "GET /vendor/vendorGetDataFromExternalApi",
                "parentSpanId": "",
                "spanId": "988c6819d4a0188a",
                "startTimeUnixNano": "1695270879211594000",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879445918434",
                "kind": 1,
                "name": "VendorController.getOrderDetailsFromExternalAPI",
                "parentSpanId": "988c6819d4a0188a",
                "spanId": "edce9a47effe62c0",
                "startTimeUnixNano": "1695270879226768184",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": ""
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879374004677",
                "kind": 3,
                "name": "observability-demo-tables",
                "parentSpanId": "3f542ae0c93d885a",
                "spanId": "322dfd81f37d9118",
                "startTimeUnixNano": "1695270879356726219",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": "select vendorenti0_.id as id1_0_0_, vendorenti0_.customer_id as customer2_0_0_, vendorenti0_.customer_name as customer3_0_0_, vendorenti0_.customer_phone_number as customer4_0_0_, vendorenti0_.model_no as model_no5_0_0_, vendorenti0_.order_id as order_id6_0_0_, vendorenti0_.product_address as product_7_0_0_, vendorenti0_.product_id as product_8_0_0_, vendorenti0_.product_name as product_9_0_0_, vendorenti0_.quantity as quantit10_0_0_ from vendor_order vendorenti0_ where vendorenti0_.id=?"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "vendor_order"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "stringValue": "SELECT"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879390822970",
                "kind": 3,
                "name": "SELECT observability-demo-tables.vendor_order",
                "parentSpanId": "9586adfee7a0ebd1",
                "spanId": "a2214a1d774f8a99",
                "startTimeUnixNano": "1695270879380926580",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": "select nextval (?)"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "stringValue": "SELECT"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879402816191",
                "kind": 3,
                "name": "SELECT observability-demo-tables",
                "parentSpanId": "9586adfee7a0ebd1",
                "spanId": "5a80310c07f0a005",
                "startTimeUnixNano": "1695270879395810699",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": "insert into vendor_order (customer_id, customer_name, customer_phone_number, model_no, order_id, product_address, product_id, product_name, quantity, id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "vendor_order"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "stringValue": "INSERT"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879418115206",
                "kind": 3,
                "name": "INSERT observability-demo-tables.vendor_order",
                "parentSpanId": "6bdfa88ddf892390",
                "spanId": "0510c6c8d2dbf81b",
                "startTimeUnixNano": "1695270879414201585",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
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
                            "intValue": "5089"
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
                            "intValue": "200"
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
                "endTimeUnixNano": "1695270879339411298",
                "kind": 3,
                "name": "GET",
                "parentSpanId": "edce9a47effe62c0",
                "spanId": "4030ce78fb36ee1c",
                "startTimeUnixNano": "1695270879241450617",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "code.namespace",
                        "value": {
                            "stringValue": "com.zaga.VendorProj.VendorRepo"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
                    {
                        "key": "code.function",
                        "value": {
                            "stringValue": "save"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879425060103",
                "kind": 1,
                "name": "VendorRepo.save",
                "parentSpanId": "edce9a47effe62c0",
                "spanId": "3f542ae0c93d885a",
                "startTimeUnixNano": "1695270879348515436",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879405343173",
                "kind": 1,
                "name": "Session.merge com.zaga.VendorProj.VendorEntity",
                "parentSpanId": "3f542ae0c93d885a",
                "spanId": "9586adfee7a0ebd1",
                "startTimeUnixNano": "1695270879376551786",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "280"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-8080-exec-3"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879424808445",
                "kind": 1,
                "name": "Transaction.commit",
                "parentSpanId": "3f542ae0c93d885a",
                "spanId": "6bdfa88ddf892390",
                "startTimeUnixNano": "1695270879406212597",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "net.sock.peer.port",
                        "value": {
                            "intValue": "39090"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "http.route",
                        "value": {
                            "stringValue": "/orders/getOrders"
                        }
                    },
                    {
                        "key": "net.sock.host.addr",
                        "value": {
                            "stringValue": "10.128.0.102"
                        }
                    },
                    {
                        "key": "net.protocol.name",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "net.host.port",
                        "value": {
                            "intValue": "5089"
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
                            "intValue": "200"
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
                            "stringValue": "Java/11.0.18"
                        }
                    },
                    {
                        "key": "net.host.name",
                        "value": {
                            "stringValue": "order-project.observability-workspace.svc.cluster.local"
                        }
                    },
                    {
                        "key": "http.target",
                        "value": {
                            "stringValue": "/orders/getOrders?id=1"
                        }
                    },
                    {
                        "key": "net.sock.peer.addr",
                        "value": {
                            "stringValue": "10.128.0.101"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879352547565",
                "kind": 2,
                "name": "GET /orders/getOrders",
                "parentSpanId": "4030ce78fb36ee1c",
                "spanId": "d7c288abf3286d75",
                "startTimeUnixNano": "1695270879271805000",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": ""
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879309864842",
                "kind": 3,
                "name": "observability-demo-tables",
                "parentSpanId": "53536cedb14f99f0",
                "spanId": "5d7b08d2bdbb709f",
                "startTimeUnixNano": "1695270879290967537",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": "select orderentit0_.id as id1_0_0_, orderentit0_.customer_id as customer2_0_0_, orderentit0_.customer_name as customer3_0_0_, orderentit0_.customer_phone_number as customer4_0_0_, orderentit0_.model_no as model_no5_0_0_, orderentit0_.order_id as order_id6_0_0_, orderentit0_.product_address as product_7_0_0_, orderentit0_.product_id as product_8_0_0_, orderentit0_.product_name as product_9_0_0_, orderentit0_.quantity as quantit10_0_0_ from order_vendor orderentit0_ where orderentit0_.id=?"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "order_vendor"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "stringValue": "SELECT"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879318725518",
                "kind": 3,
                "name": "SELECT observability-demo-tables.order_vendor",
                "parentSpanId": "3b41a67908b09ebc",
                "spanId": "a0847634138e8a46",
                "startTimeUnixNano": "1695270879315773539",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "code.namespace",
                        "value": {
                            "stringValue": "com.zaga.OrderProj.OrderRepo"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "code.function",
                        "value": {
                            "stringValue": "findById"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879326776557",
                "kind": 1,
                "name": "OrderRepo.findById",
                "parentSpanId": "17efa03e31e29a71",
                "spanId": "53536cedb14f99f0",
                "startTimeUnixNano": "1695270879289285749",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879335774002",
                "kind": 1,
                "name": "OrderController.getOrdersByid",
                "parentSpanId": "d7c288abf3286d75",
                "spanId": "17efa03e31e29a71",
                "startTimeUnixNano": "1695270879285166600",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879323574937",
                "kind": 1,
                "name": "Session.find com.zaga.OrderProj.OrderEntity",
                "parentSpanId": "53536cedb14f99f0",
                "spanId": "3b41a67908b09ebc",
                "startTimeUnixNano": "1695270879312098301",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879326329131",
                "kind": 1,
                "name": "Transaction.commit",
                "parentSpanId": "53536cedb14f99f0",
                "spanId": "0eed82aa3a1c95e9",
                "startTimeUnixNano": "1695270879324057851",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            }
        ],
        "statusCode": "200",
        "traceId": "dee3bd2e82665daaead05dce094a0f94"
    },
    {
        "createdTime": "2 seconds ago",
        "duration": "2ms",
        "methodName": "GET",
        "serviceName": "order-project",
        "spanCount": "7",
        "spans": [
            {
                "attributes": [
                    {
                        "key": "net.sock.peer.port",
                        "value": {
                            "intValue": "39090"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "http.route",
                        "value": {
                            "stringValue": "/orders/getOrders"
                        }
                    },
                    {
                        "key": "net.sock.host.addr",
                        "value": {
                            "stringValue": "10.128.0.102"
                        }
                    },
                    {
                        "key": "net.protocol.name",
                        "value": {
                            "stringValue": "http"
                        }
                    },
                    {
                        "key": "net.host.port",
                        "value": {
                            "intValue": "5089"
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
                            "intValue": "200"
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
                            "stringValue": "Java/11.0.18"
                        }
                    },
                    {
                        "key": "net.host.name",
                        "value": {
                            "stringValue": "order-project.observability-workspace.svc.cluster.local"
                        }
                    },
                    {
                        "key": "http.target",
                        "value": {
                            "stringValue": "/orders/getOrders?id=1"
                        }
                    },
                    {
                        "key": "net.sock.peer.addr",
                        "value": {
                            "stringValue": "10.128.0.101"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879352547565",
                "kind": 2,
                "name": "GET /orders/getOrders",
                "parentSpanId": "4030ce78fb36ee1c",
                "spanId": "d7c288abf3286d75",
                "startTimeUnixNano": "1695270879271805000",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": ""
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879309864842",
                "kind": 3,
                "name": "observability-demo-tables",
                "parentSpanId": "53536cedb14f99f0",
                "spanId": "5d7b08d2bdbb709f",
                "startTimeUnixNano": "1695270879290967537",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "db.user",
                        "value": {
                            "stringValue": "observability-demo-user"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
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
                        "key": "db.system",
                        "value": {
                            "stringValue": "postgresql"
                        }
                    },
                    {
                        "key": "db.statement",
                        "value": {
                            "stringValue": "select orderentit0_.id as id1_0_0_, orderentit0_.customer_id as customer2_0_0_, orderentit0_.customer_name as customer3_0_0_, orderentit0_.customer_phone_number as customer4_0_0_, orderentit0_.model_no as model_no5_0_0_, orderentit0_.order_id as order_id6_0_0_, orderentit0_.product_address as product_7_0_0_, orderentit0_.product_id as product_8_0_0_, orderentit0_.product_name as product_9_0_0_, orderentit0_.quantity as quantit10_0_0_ from order_vendor orderentit0_ where orderentit0_.id=?"
                        }
                    },
                    {
                        "key": "net.peer.port",
                        "value": {
                            "intValue": "5432"
                        }
                    },
                    {
                        "key": "db.sql.table",
                        "value": {
                            "stringValue": "order_vendor"
                        }
                    },
                    {
                        "key": "db.operation",
                        "value": {
                            "stringValue": "SELECT"
                        }
                    },
                    {
                        "key": "db.name",
                        "value": {
                            "stringValue": "observability-demo-tables"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879318725518",
                "kind": 3,
                "name": "SELECT observability-demo-tables.order_vendor",
                "parentSpanId": "3b41a67908b09ebc",
                "spanId": "a0847634138e8a46",
                "startTimeUnixNano": "1695270879315773539",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "code.namespace",
                        "value": {
                            "stringValue": "com.zaga.OrderProj.OrderRepo"
                        }
                    },
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "code.function",
                        "value": {
                            "stringValue": "findById"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879326776557",
                "kind": 1,
                "name": "OrderRepo.findById",
                "parentSpanId": "17efa03e31e29a71",
                "spanId": "53536cedb14f99f0",
                "startTimeUnixNano": "1695270879289285749",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879335774002",
                "kind": 1,
                "name": "OrderController.getOrdersByid",
                "parentSpanId": "d7c288abf3286d75",
                "spanId": "17efa03e31e29a71",
                "startTimeUnixNano": "1695270879285166600",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.id",
                        "value": {
                            "intValue": "281"
                        }
                    },
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879323574937",
                "kind": 1,
                "name": "Session.find com.zaga.OrderProj.OrderEntity",
                "parentSpanId": "53536cedb14f99f0",
                "spanId": "3b41a67908b09ebc",
                "startTimeUnixNano": "1695270879312098301",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            },
            {
                "attributes": [
                    {
                        "key": "thread.name",
                        "value": {
                            "stringValue": "http-nio-5089-exec-10"
                        }
                    }
                ],
                "endTimeUnixNano": "1695270879326329131",
                "kind": 1,
                "name": "Transaction.commit",
                "parentSpanId": "53536cedb14f99f0",
                "spanId": "0eed82aa3a1c95e9",
                "startTimeUnixNano": "1695270879324057851",
                "status": {},
                "traceId": "dee3bd2e82665daaead05dce094a0f94"
            }
        ],
        "statusCode": "200",
        "traceId": "dee3bd2e82665daaead05dce094a0f94"
    }
]