import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterMsgRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterMsgCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterMsgLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterMsgDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterMsgTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterMsgEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterMsgJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterMsgJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterMsgRegionMySuffixModule,
        JhipsterMsgCountryMySuffixModule,
        JhipsterMsgLocationMySuffixModule,
        JhipsterMsgDepartmentMySuffixModule,
        JhipsterMsgTaskMySuffixModule,
        JhipsterMsgEmployeeMySuffixModule,
        JhipsterMsgJobMySuffixModule,
        JhipsterMsgJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterMsgEntityModule {}
