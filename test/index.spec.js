import expect from 'expect';
import {NestableRecord} from '../src';

// TODO: turn into tests
/*
const Point = Immutable.Record({x: 0, y: 0}, 'Point');

const Rect = NestableRecord({
  a: null,
  b: null,
}, {
  a: Point,
  b: Point,
}, 'Rect');

const PointCloud = NestableRecord({
  points: null,
}, {
  points: [Immutable.Set, Point],
}, 'PointCloud');

const rect = Rect({a: {x: 1, y: 1}, b: {x: 2, y: 2}});
console.log(rect);

const cloud = PointCloud({points: [{x: 1, y: 1}, {x: 2, y: 2}]});
console.log(cloud);
*/

describe('NestableRecord', () => {
  it('should exists', () => {
    expect(NestableRecord != null).toBe(true);
  });
});
