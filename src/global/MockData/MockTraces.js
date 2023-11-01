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

const DBSummaryMock = [
  {
    serviceName: "order-project",
    dbCallCount: 20,
    dbName: "postgres",
    dbPeakLatencyCount: 4
  },
  {
    serviceName: "order-project",
    dbCallCount: 30,
    dbName: "mongodb",
    dbPeakLatencyCount: 8
  }
]

const kafkaMock = [
  {
    serviceName: "order-project",
    kafkaCallCount: 20,
    kafkaPeakLatency: 4
  },
  {
    serviceName: "vendor-project",
    kafkaCallCount: 30,
    kafkaPeakLatency: 8
  }
]

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
];

export const options = [
  {
    "value": 30,
    "label": "30 minutes"
  },
  {
    "value": 60,
    "label": "1 hour"
  },
  {
    "value": 120,
    "label": "2 hours"
  },
  {
    "value": 240,
    "label": "4 hours"
  },
  {
    "value": 480,
    "label": "8 hours"
  },
  {
    "value": 720,
    "label": "12 hours"
  },
  {
    "value": 960,
    "label": "16 hours"
  },
  {
    "value": 1440,
    "label": "24 hours"
  }
];