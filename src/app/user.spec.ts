import {describe} from '@angular/testing';
import { ComponentFixture, async } from '@angular/core/testing';
//import { TestUtils }               from '../../test';
import { HelloIonicPage }          from './user.service';

let fixture: ComponentFixture<HelloIonicPage> = null;
let instance: any = null;

describe('Pages: HelloIonic', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([HelloIonicPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));

  it('should create the hello ionic page', async(() => {
    expect(instance).toBeTruthy();
  }));
});