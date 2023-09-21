const mockTraces = [
  {
    servicename: 'Service 1',
    endPoint: '/endpoint1',
    traceID: '123456987667898767898768987',
    duration: '500 ms',
    statusCode: '200',
    method: 'GET',
  },
  {
    servicename: 'Service 2',
    endPoint: '/endpoint2',
    traceID: '789012',
    duration: '300 ms',
    statusCode: '404',
    method: 'POST',
  },
  {
    servicename: 'Service 3',
    endPoint: '/endpoint3',
    traceID: '345678',
    duration: '200 ms',
    statusCode: '200',
    method: 'GET',
  },
  {
    servicename: 'Service 4',
    endPoint: '/endpoint4',
    traceID: '123456',
    duration: '100 ms',
    statusCode: '200',
    method: 'GET',
  },
  {
    servicename: 'Service 5',
    endPoint: '/endpoint5',
    traceID: '123456',
    duration: '100 ms',
    statusCode: '200',
    method: 'GET',
  }
];

const TraceSummaryMock = [
  {
      serviceName: "order-project",
      totalApiCalls: 70,
      peakLatency: "3000ms",
      totalErrorCalls: 40,
      totalSuccessCalls: 30
  },
  {
      serviceName: "vendor-project",
      totalApiCalls: 50,
      peakLatency: "5000ms",
      totalErrorCalls: 20,
      totalSuccessCalls: 30
  },
  {
      serviceName: "personal-details",
      totalApiCalls: 30,
      peakLatency: "2000ms",
      totalErrorCalls: 10,
      totalSuccessCalls: 20
  }
]