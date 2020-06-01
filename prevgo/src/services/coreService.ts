import BaseService from './base/baseService';

class CoreService extends BaseService {
  constructor(baseUrl: string, headers?: string) {
    super(baseUrl, headers);
  }
}

export const createCoreService = (baseUrl: string, headers?: string) =>
  new CoreService(baseUrl, headers);
