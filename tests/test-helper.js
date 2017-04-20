import resolver from './helpers/resolver';
import { setResolver } from 'ember-qunit';
import { start } from 'ember-cli-qunit';
import QUnit from 'qunit';

QUnit.config.maxDepth = 10;

setResolver(resolver);

start();
