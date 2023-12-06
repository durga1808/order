export const errorLogs = [
    {
        "createdTime": "ISODate(2023-10-26T14:36:15.391Z)",
        "scopeLogs": [
            {
                "logRecords": [
                    {
                        "body": {
                            "stringValue": "No order found with ID: 1"
                        },
                        "flags": 1,
                        "observedTimeUnixNano": "1698330975391036000",
                        "severityNumber": 17,
                        "severityText": "ERROR",
                        "spanId": "69fdc9b4dead4c4e",
                        "timeUnixNano": "1698330975391028000",
                        "traceId": "a3d0886bc6a4d30e409534edfb24e344"
                    }
                ],
                "scope": {
                    "name": "com.zaga.OrderProj.OrderController"
                }
            }
        ],
        "serviceName": "orderproject",
        "severityText": "ERROR",
        "spanId": "69fdc9b4dead4c4e",
        "traceId": "a3d0886bc6a4d30e409534edfb24e344"
    },
    {
        "createdTime": "ISODate(2023-10-26T14:36:15.406Z)",
        "scopeLogs": [
            {
                "logRecords": [
                    {
                        "attributes": [
                            {
                                "key": "exception.message",
                                "value": {
                                    "stringValue": "404 : [no body]"
                                }
                            },
                            {
                                "key": "exception.stacktrace",
                                "value": {
                                    "stringValue": "org.springframework.web.client.HttpClientErrorException$NotFound: 404 : [no body]\n+\tat org.springframework.web.client.HttpClientErrorException.create(HttpClientErrorException.java: 113)\n+\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java: 168)\n+\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java: 122)\n+\tat org.springframework.web.client.ResponseErrorHandler.handleError(ResponseErrorHandler.java: 63)\n+\tat org.springframework.web.client.RestTemplate.handleResponse(RestTemplate.java: 825)\n+\tat org.springframework.web.client.RestTemplate.doExecute(RestTemplate.java: 783)\n+\tat org.springframework.web.client.RestTemplate.execute(RestTemplate.java: 717)\n+\tat org.springframework.web.client.RestTemplate.getForEntity(RestTemplate.java: 367)\n+\tat com.zaga.VendorProj.VendorController.getOrderDetailsFromExternalAPI(VendorController.java: 44)\n+\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n+\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java: 62)\n+\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java: 43)\n+\tat java.base/java.lang.reflect.Method.invoke(Method.java: 566)\n+\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java: 205)\n+\tat org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java: 150)\n+\tat org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java: 117)\n+\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java: 895)\n+\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java: 808)\n+\tat org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java: 87)\n+\tat org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java: 1072)\n+\tat org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java: 965)\n+\tat org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java: 1006)\n+\tat org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java: 898)\n+\tat javax.servlet.http.HttpServlet.service(HttpServlet.java: 529)\n+\tat org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java: 883)\n+\tat javax.servlet.http.HttpServlet.service(HttpServlet.java: 623)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 209)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java: 51)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java: 100)\n+\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java: 117)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java: 93)\n+\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java: 117)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.servlet.v3_1.OpenTelemetryHandlerMappingFilter.doFilter(OpenTelemetryHandlerMappingFilter.java: 83)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java: 201)\n+\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java: 117)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java: 167)\n+\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java: 90)\n+\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java: 481)\n+\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java: 130)\n+\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java: 93)\n+\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java: 74)\n+\tat org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java: 768)\n+\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java: 343)\n+\tat org.apache.coyote.http11.Http11Processor.service(Http11Processor.java: 390)\n+\tat org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java: 63)\n+\tat org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java: 926)\n+\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java: 1791)\n+\tat org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java: 52)\n+\tat org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java: 1191)\n+\tat org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java: 659)\n+\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java: 61)\n+\tat java.base/java.lang.Thread.run(Thread.java: 829)\n"
                                }
                            },
                            {
                                "key": "exception.type",
                                "value": {
                                    "stringValue": "org.springframework.web.client.HttpClientErrorException$NotFound"
                                }
                            }
                        ],
                        "body": {
                            "stringValue": "Error while fetching order details from the external API"
                        },
                        "flags": 1,
                        "observedTimeUnixNano": "1698330975406102000",
                        "severityNumber": 17,
                        "severityText": "ERROR",
                        "spanId": "895dd8eccc3057d9",
                        "timeUnixNano": "1698330975406091000",
                        "traceId": "a3d0886bc6a4d30e409534edfb24e344"
                    }
                ],
                "scope": {
                    "name": "com.zaga.VendorProj.VendorController"
                }
            }
        ],
        "serviceName": "vendorproject",
        "severityText": "ERROR",
        "spanId": "895dd8eccc3057d9",
        "traceId": "a3d0886bc6a4d30e409534edfb24e344"
    },
    {
        "createdTime": "ISODate(2023-10-26T14:36:15.413Z)",
        "scopeLogs": [
            {
                "logRecords": [
                    {
                        "attributes": [
                            {
                                "key": "exception.message",
                                "value": {
                                    "stringValue": "404 : [no body]"
                                }
                            },
                            {
                                "key": "exception.stacktrace",
                                "value": {
                                    "stringValue": "org.springframework.web.client.HttpClientErrorException$NotFound: 404 : [no body]\n+\tat org.springframework.web.client.HttpClientErrorException.create(HttpClientErrorException.java: 113)\n+\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java: 168)\n+\tat org.springframework.web.client.DefaultResponseErrorHandler.handleError(DefaultResponseErrorHandler.java: 122)\n+\tat org.springframework.web.client.ResponseErrorHandler.handleError(ResponseErrorHandler.java: 63)\n+\tat org.springframework.web.client.RestTemplate.handleResponse(RestTemplate.java: 825)\n+\tat org.springframework.web.client.RestTemplate.doExecute(RestTemplate.java: 783)\n+\tat org.springframework.web.client.RestTemplate.execute(RestTemplate.java: 717)\n+\tat org.springframework.web.client.RestTemplate.getForEntity(RestTemplate.java: 367)\n+\tat com.zaga.VendorProj.VendorController.getOrderDetailsFromExternalAPI(VendorController.java: 44)\n+\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n+\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java: 62)\n+\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java: 43)\n+\tat java.base/java.lang.reflect.Method.invoke(Method.java: 566)\n+\tat org.springframework.web.method.support.InvocableHandlerMethod.doInvoke(InvocableHandlerMethod.java: 205)\n+\tat org.springframework.web.method.support.InvocableHandlerMethod.invokeForRequest(InvocableHandlerMethod.java: 150)\n+\tat org.springframework.web.servlet.mvc.method.annotation.ServletInvocableHandlerMethod.invokeAndHandle(ServletInvocableHandlerMethod.java: 117)\n+\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.invokeHandlerMethod(RequestMappingHandlerAdapter.java: 895)\n+\tat org.springframework.web.servlet.mvc.method.annotation.RequestMappingHandlerAdapter.handleInternal(RequestMappingHandlerAdapter.java: 808)\n+\tat org.springframework.web.servlet.mvc.method.AbstractHandlerMethodAdapter.handle(AbstractHandlerMethodAdapter.java: 87)\n+\tat org.springframework.web.servlet.DispatcherServlet.doDispatch(DispatcherServlet.java: 1072)\n+\tat org.springframework.web.servlet.DispatcherServlet.doService(DispatcherServlet.java: 965)\n+\tat org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java: 1006)\n+\tat org.springframework.web.servlet.FrameworkServlet.doGet(FrameworkServlet.java: 898)\n+\tat javax.servlet.http.HttpServlet.service(HttpServlet.java: 529)\n+\tat org.springframework.web.servlet.FrameworkServlet.service(FrameworkServlet.java: 883)\n+\tat javax.servlet.http.HttpServlet.service(HttpServlet.java: 623)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 209)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.apache.tomcat.websocket.server.WsFilter.doFilter(WsFilter.java: 51)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.filter.RequestContextFilter.doFilterInternal(RequestContextFilter.java: 100)\n+\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java: 117)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.filter.FormContentFilter.doFilterInternal(FormContentFilter.java: 93)\n+\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java: 117)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.servlet.v3_1.OpenTelemetryHandlerMappingFilter.doFilter(OpenTelemetryHandlerMappingFilter.java: 83)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.springframework.web.filter.CharacterEncodingFilter.doFilterInternal(CharacterEncodingFilter.java: 201)\n+\tat org.springframework.web.filter.OncePerRequestFilter.doFilter(OncePerRequestFilter.java: 117)\n+\tat org.apache.catalina.core.ApplicationFilterChain.internalDoFilter(ApplicationFilterChain.java: 178)\n+\tat org.apache.catalina.core.ApplicationFilterChain.doFilter(ApplicationFilterChain.java: 153)\n+\tat org.apache.catalina.core.StandardWrapperValve.invoke(StandardWrapperValve.java: 167)\n+\tat org.apache.catalina.core.StandardContextValve.invoke(StandardContextValve.java: 90)\n+\tat org.apache.catalina.authenticator.AuthenticatorBase.invoke(AuthenticatorBase.java: 481)\n+\tat org.apache.catalina.core.StandardHostValve.invoke(StandardHostValve.java: 130)\n+\tat org.apache.catalina.valves.ErrorReportValve.invoke(ErrorReportValve.java: 93)\n+\tat org.apache.catalina.core.StandardEngineValve.invoke(StandardEngineValve.java: 74)\n+\tat org.apache.catalina.valves.RemoteIpValve.invoke(RemoteIpValve.java: 768)\n+\tat org.apache.catalina.connector.CoyoteAdapter.service(CoyoteAdapter.java: 343)\n+\tat org.apache.coyote.http11.Http11Processor.service(Http11Processor.java: 390)\n+\tat org.apache.coyote.AbstractProcessorLight.process(AbstractProcessorLight.java: 63)\n+\tat org.apache.coyote.AbstractProtocol$ConnectionHandler.process(AbstractProtocol.java: 926)\n+\tat org.apache.tomcat.util.net.NioEndpoint$SocketProcessor.doRun(NioEndpoint.java: 1791)\n+\tat org.apache.tomcat.util.net.SocketProcessorBase.run(SocketProcessorBase.java: 52)\n+\tat org.apache.tomcat.util.threads.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java: 1191)\n+\tat org.apache.tomcat.util.threads.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java: 659)\n+\tat org.apache.tomcat.util.threads.TaskThread$WrappingRunnable.run(TaskThread.java: 61)\n+\tat java.base/java.lang.Thread.run(Thread.java: 829)\n"
                                }
                            },
                            {
                                "key": "exception.type",
                                "value": {
                                    "stringValue": "org.springframework.web.client.HttpClientErrorException$NotFound"
                                }
                            }
                        ],
                        "body": {
                            "stringValue": "Servlet.service() for servlet [dispatcherServlet] in context with path [] threw exception [Request processing failed; nested exception is org.springframework.web.client.HttpClientErrorException$NotFound: 404 : [no body]] with root cause"
                        },
                        "flags": 1,
                        "observedTimeUnixNano": "1698330975413225000",
                        "severityNumber": 17,
                        "severityText": "SEVERE",
                        "spanId": "55e6da7636840197",
                        "timeUnixNano": "1698330975412000000",
                        "traceId": "a3d0886bc6a4d30e409534edfb24e344"
                    }
                ],
                "scope": {
                    "name": "org.apache.catalina.core.ContainerBase.[Tomcat].[localhost].[/].[dispatcherServlet]"
                }
            }
        ],
        "serviceName": "vendorproject",
        "severityText": "SEVERE",
        "spanId": "55e6da7636840197",
        "traceId": "a3d0886bc6a4d30e409534edfb24e344"
    }
]