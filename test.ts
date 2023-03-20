/**
 * Ultrasonic tests
 */

makerbit.connectUltrasonicDistanceSensor(DigitalPin.P1, DigitalPin.P2);
makerbit.onUltrasonicObjectDetected(10, DistanceUnit.CM, () => {});
const distance: number = makerbit.getUltrasonicDistance(DistanceUnit.CM);
const isNear = makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM);
