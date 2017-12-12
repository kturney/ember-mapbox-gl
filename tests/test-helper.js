import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import Application from '../app';
import QUnit from 'qunit';

QUnit.config.maxDepth = 10;

setApplication(Application.create({ autoboot: false }));

start();
