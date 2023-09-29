export const spanData = [
    {
        "id": "650a8ca8ce15f570fd43db7e",
        "traceId": "1d9349e72cb6279ff97befe54f2e982b",
        "serviceName": "order-project",
        "methodName": "POST /",
        "operationName": "/personal/details",
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
        "operationName": "/vendor/details",
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
        "statusCode": "500",
        "traceId": "dee3bd2e82665daaead05dce094a0f94"
    },
    {
        "createdTime": "2 seconds ago",
        "duration": "2ms",
        "methodName": "GET",
        "operationName": "/order/details",
        "serviceName": "order-project",
        "spanCount": "7",
        "statusCode": "500",
        "traceId": "dee3bd2e82665daaead05dce094a0f94"
    },
    {
        "traceId": "1d9349e72cb6279ff97befe54f2e982b",
        "serviceName": "order-project",
        "methodName": "POST /",
        "operationName": "/personal/details",
        "duration": "120ms",
        "statusCode": "200",
        "spanCount": "5",
        "createdTime": "a few seconds ago",
    },
    {
        "createdTime": "4 seconds ago",
        "duration": "18ms",
        "methodName": "GET",
        "serviceName": "vendor-project",
        "operationName": "/vendor/details",
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
        "operationName": "/order/details",
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
    },
    {
        "id": "650a8ca8ce15f570fd43db7e",
        "traceId": "1d9349e72cb6279ff97befe54f2e982b",
        "serviceName": "order-project",
        "methodName": "POST /",
        "operationName": "/personal/details",
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
        "operationName": "/vendor/details",
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
        "id": "65126230ec6fe91c4c8baf0f",
        "createdTime": "2023-09-26 10:16:37 IST",
        "duration": 14,
        "methodName": "POST",
        "operationName": "POST /orders/createErrorOrders",
        "serviceName": "order-project",
        "spanCount": "8",
        "spans": [
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
                  "intValue": "279"
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
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597717319950",
            "kind": 1,
            "name": "OrderRepo.save",
            "parentSpanId": "bf4ebbeb2433508c",
            "spanId": "aa728a8aa82a20f2",
            "startTimeUnixNano": "1695703597594034961",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
          },
          {
            "attributes": [
              {
                "key": "net.sock.peer.port",
                "value": {
                  "intValue": "36986"
                }
              },
              {
                "key": "thread.id",
                "value": {
                  "intValue": "279"
                }
              },
              {
                "key": "net.sock.host.port",
                "value": {
                  "intValue": "5089"
                }
              },
              {
                "key": "http.route",
                "value": {
                  "stringValue": "/orders/createErrorOrders"
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
                  "stringValue": "POST"
                }
              },
              {
                "key": "user_agent.original",
                "value": {
                  "stringValue": "PostmanRuntime/7.33.0"
                }
              },
              {
                "key": "net.host.name",
                "value": {
                  "stringValue": "order-project-observability-workspace.apps.zagaopenshift.zagaopensource.com"
                }
              },
              {
                "key": "http.request_content_length",
                "value": {
                  "intValue": "244"
                }
              },
              {
                "key": "http.target",
                "value": {
                  "stringValue": "/orders/createErrorOrders"
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
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597727667121",
            "kind": 2,
            "name": "POST /orders/createErrorOrders",
            "parentSpanId": "",
            "spanId": "d3360cf7b5cf663b",
            "startTimeUnixNano": "1695703597578409000",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "279"
                }
              },
              {
                "key": "thread.name",
                "value": {
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597613356841",
            "kind": 1,
            "name": "Session.merge com.zaga.OrderProj.OrderEntity",
            "parentSpanId": "aa728a8aa82a20f2",
            "spanId": "e98c4170acb08bb8",
            "startTimeUnixNano": "1695703597603606588",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "279"
                }
              },
              {
                "key": "thread.name",
                "value": {
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597716945522",
            "kind": 1,
            "name": "Transaction.commit",
            "parentSpanId": "aa728a8aa82a20f2",
            "spanId": "f64553f364871663",
            "startTimeUnixNano": "1695703597613747176",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "279"
                }
              },
              {
                "key": "thread.name",
                "value": {
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597723921771",
            "kind": 1,
            "name": "OrderController.createErrorOrder",
            "parentSpanId": "d3360cf7b5cf663b",
            "spanId": "bf4ebbeb2433508c",
            "startTimeUnixNano": "1695703597584827760",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
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
                  "intValue": "279"
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
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597601865353",
            "kind": 3,
            "name": "observability-demo-tables",
            "parentSpanId": "aa728a8aa82a20f2",
            "spanId": "7bf64142a40bcbf6",
            "startTimeUnixNano": "1695703597595488385",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
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
                  "intValue": "279"
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
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597611407752",
            "kind": 3,
            "name": "SELECT observability-demo-tables.order_vendor",
            "parentSpanId": "e98c4170acb08bb8",
            "spanId": "1f53876160bdd211",
            "startTimeUnixNano": "1695703597607086760",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
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
                  "intValue": "279"
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
                  "stringValue": "update order_vendor set customer_id=?, customer_name=?, customer_phone_number=?, model_no=?, order_id=?, product_address=?, product_id=?, product_name=?, quantity=? where id=?"
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
                  "stringValue": "UPDATE"
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
                  "stringValue": "http-nio-5089-exec-2"
                }
              }
            ],
            "endTimeUnixNano": "1695703597704853454",
            "kind": 3,
            "name": "UPDATE observability-demo-tables.order_vendor",
            "parentSpanId": "f64553f364871663",
            "spanId": "aa9d2f7ca9a40186",
            "startTimeUnixNano": "1695703597690099650",
            "status": {},
            "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
          }
        ],
        "statusCode": 200,
        "traceId": "2d6847588ce29c7f7cb4b07bea1f888a"
      },
      {
        "createdTime": "2023-09-26 10:10:35 IST",
        "duration": 117,
        "methodName": "GET",
        "operationName": "GET /vendor/vendorGetDataFromExternalApi",
        "serviceName": "vendor-project",
        "spanCount": "10",
        "spans": [
          {
            "attributes": [
              {
                "key": "net.sock.peer.port",
                "value": {
                  "intValue": "34608"
                }
              },
              {
                "key": "thread.id",
                "value": {
                  "intValue": "278"
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
                  "stringValue": "PostmanRuntime/7.33.0"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235887662207",
            "kind": 2,
            "name": "GET /vendor/vendorGetDataFromExternalApi",
            "parentSpanId": "",
            "spanId": "a3c43b336098b819",
            "startTimeUnixNano": "1695703235667410000",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
          },
          {
            "attributes": [
              {
                "key": "net.sock.peer.port",
                "value": {
                  "intValue": "50182"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235825376593",
            "kind": 2,
            "name": "GET /orders/getOrders",
            "parentSpanId": "06f74bb95de0fc3d",
            "spanId": "b749af99ce8e2355",
            "startTimeUnixNano": "1695703235748888000",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "intValue": "278"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235864343009",
            "kind": 3,
            "name": "SELECT observability-demo-tables",
            "parentSpanId": "3a407f59e1626053",
            "spanId": "881cd7e46da0f69d",
            "startTimeUnixNano": "1695703235860453786",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "intValue": "278"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235857058962",
            "kind": 3,
            "name": "SELECT observability-demo-tables.vendor_order",
            "parentSpanId": "3a407f59e1626053",
            "spanId": "ad2796c37af3ec3e",
            "startTimeUnixNano": "1695703235849406886",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235781682485",
            "kind": 3,
            "name": "observability-demo-tables",
            "parentSpanId": "467baabbe2c12828",
            "spanId": "464598aeba4e72a1",
            "startTimeUnixNano": "1695703235773994969",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235804305387",
            "kind": 1,
            "name": "Session.find com.zaga.OrderProj.OrderEntity",
            "parentSpanId": "467baabbe2c12828",
            "spanId": "996fd46fb5595c29",
            "startTimeUnixNano": "1695703235785929923",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235806631528",
            "kind": 1,
            "name": "Transaction.commit",
            "parentSpanId": "467baabbe2c12828",
            "spanId": "ef7c3579e0943f89",
            "startTimeUnixNano": "1695703235805060754",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235806789374",
            "kind": 1,
            "name": "OrderRepo.findById",
            "parentSpanId": "5903c537b0577f94",
            "spanId": "467baabbe2c12828",
            "startTimeUnixNano": "1695703235770526830",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235800430778",
            "kind": 3,
            "name": "SELECT observability-demo-tables.order_vendor",
            "parentSpanId": "996fd46fb5595c29",
            "spanId": "1ce2b4b162ae43e9",
            "startTimeUnixNano": "1695703235791316929",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "278"
                }
              },
              {
                "key": "thread.name",
                "value": {
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235883353258",
            "kind": 1,
            "name": "VendorController.getOrderDetailsFromExternalAPI",
            "parentSpanId": "a3c43b336098b819",
            "spanId": "a64efce2a8c03478",
            "startTimeUnixNano": "1695703235681990529",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "278"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              },
              {
                "key": "http.method",
                "value": {
                  "stringValue": "GET"
                }
              }
            ],
            "endTimeUnixNano": "1695703235822345906",
            "kind": 3,
            "name": "GET",
            "parentSpanId": "a64efce2a8c03478",
            "spanId": "06f74bb95de0fc3d",
            "startTimeUnixNano": "1695703235704866286",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "intValue": "278"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235876220392",
            "kind": 1,
            "name": "VendorRepo.save",
            "parentSpanId": "a64efce2a8c03478",
            "spanId": "bcf5d2e1d7af9875",
            "startTimeUnixNano": "1695703235830353123",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "intValue": "278"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235872362003",
            "kind": 3,
            "name": "INSERT observability-demo-tables.vendor_order",
            "parentSpanId": "b4d607a6e520a3d1",
            "spanId": "de7eb597bc80b3f8",
            "startTimeUnixNano": "1695703235869231684",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "stringValue": "http-nio-5089-exec-4"
                }
              }
            ],
            "endTimeUnixNano": "1695703235820782045",
            "kind": 1,
            "name": "OrderController.getOrdersByid",
            "parentSpanId": "b749af99ce8e2355",
            "spanId": "5903c537b0577f94",
            "startTimeUnixNano": "1695703235762456248",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
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
                  "intValue": "278"
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
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235842709733",
            "kind": 3,
            "name": "observability-demo-tables",
            "parentSpanId": "bcf5d2e1d7af9875",
            "spanId": "3179880e8c3aeab6",
            "startTimeUnixNano": "1695703235834659119",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "278"
                }
              },
              {
                "key": "thread.name",
                "value": {
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235865981450",
            "kind": 1,
            "name": "Session.merge com.zaga.VendorProj.VendorEntity",
            "parentSpanId": "bcf5d2e1d7af9875",
            "spanId": "3a407f59e1626053",
            "startTimeUnixNano": "1695703235844730836",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
          },
          {
            "attributes": [
              {
                "key": "thread.id",
                "value": {
                  "intValue": "278"
                }
              },
              {
                "key": "thread.name",
                "value": {
                  "stringValue": "http-nio-8080-exec-7"
                }
              }
            ],
            "endTimeUnixNano": "1695703235876040371",
            "kind": 1,
            "name": "Transaction.commit",
            "parentSpanId": "bcf5d2e1d7af9875",
            "spanId": "b4d607a6e520a3d1",
            "startTimeUnixNano": "1695703235866467014",
            "status": {},
            "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
          }
        ],
        "statusCode": 200,
        "traceId": "753f5e0f8b8c7aec643b4eb890376e01"
      },
]