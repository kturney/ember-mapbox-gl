import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import Application from 'dummy/app';
import config from 'dummy/config/environment';

QUnit.config.maxDepth = 10;

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
