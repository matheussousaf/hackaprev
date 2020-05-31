import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getVersion(): Version {
    return {
      version: 1.0,
      status: 'UP',
    };
  }
}
