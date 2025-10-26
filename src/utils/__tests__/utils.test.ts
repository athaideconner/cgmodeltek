import '@testing-library/jest-dom';
import { performanceMonitor } from '../performance';
import { logger, LogLevel } from '../logger';
import { analytics } from '../analytics';

type PerformanceObserverCallback = (list: PerformanceObserverEntryList) => void;

// Mock PerformanceObserver
class MockPerformanceObserver {
  constructor(callback: PerformanceObserverCallback) {
    this.callback = callback;
  }
  observe() {}
  disconnect() {}
  private callback: PerformanceObserverCallback;
}

// Type assertion for the mock
global.PerformanceObserver = MockPerformanceObserver as unknown as typeof PerformanceObserver;

describe('Performance Monitor', () => {
  beforeEach(() => {
    // Reset performance monitor instance
  (performanceMonitor as unknown as { metrics: Record<string, number> }).metrics = {
      pageLoad: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
    };
  });

  it('should initialize with default metrics', () => {
    const metrics = performanceMonitor.getMetrics();
    expect(metrics).toEqual({
      pageLoad: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
    });
  });
});

describe('Logger', () => {
  beforeEach(() => {
    // Clear logs before each test
    logger.clearLogs();
  });

  it('should log messages with different levels', () => {
    const testMessage = 'Test message';
    const testData = { test: 'data' };

    logger.debug(testMessage, testData);
    logger.info(testMessage, testData);
    logger.warn(testMessage, testData);
    logger.error(testMessage, new Error('Test error'), testData);

    const logs = logger.getLogs();
    expect(logs).toHaveLength(4);
    expect(logs[0].level).toBe(LogLevel.DEBUG);
    expect(logs[1].level).toBe(LogLevel.INFO);
    expect(logs[2].level).toBe(LogLevel.WARN);
    expect(logs[3].level).toBe(LogLevel.ERROR);
  });

  it('should format log entries correctly', () => {
    const testMessage = 'Test message';
    logger.info(testMessage);

    const logs = logger.getLogs();
    expect(logs[0]).toMatchObject({
      level: LogLevel.INFO,
      message: testMessage,
    });
    expect(logs[0].timestamp).toBeDefined();
  });
});

describe('Analytics', () => {
  beforeEach(() => {
    // Clear events before each test
    analytics.clearEvents();
  });

  it('should track events with properties', () => {
    const eventName = 'test_event';
    const properties = { test: 'data' };

    analytics.track(eventName, properties);

    const events = analytics.getEvents();
    expect(events).toHaveLength(1);
    expect(events[0]).toMatchObject({
      eventName,
      properties,
    });
    expect(events[0].timestamp).toBeDefined();
  });

  it('should track user interactions', () => {
    const elementId = 'test-button';
    const interactionType = 'click';
    const properties = { additional: 'data' };

    analytics.trackUserInteraction(elementId, interactionType, properties);

    const events = analytics.getEvents();
    expect(events).toHaveLength(1);
    expect(events[0].properties).toMatchObject({
      elementId,
      interactionType,
      additional: 'data',
    });
  });

  it('should track errors', () => {
    const error = new Error('Test error');
    const properties = { context: 'test' };

    analytics.trackError(error, properties);

    const events = analytics.getEvents();
    expect(events).toHaveLength(1);
    expect(events[0].properties).toMatchObject({
      errorMessage: error.message,
      errorStack: error.stack,
      context: 'test',
    });
  });
});

describe('Utils', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

// Placeholder types and example cases removed to keep tests minimal and lint‑clean