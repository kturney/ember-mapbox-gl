import { setResolver } from 'ember-qunit';
import { start } from 'ember-cli-qunit';
import QUnit from 'qunit';
import resolver from './helpers/resolver';

QUnit.config.maxDepth = 10;

setResolver(resolver);

start();
