import serviceV2 from './abstract.service';

export class Service {
  public static sedInvite(name: string, email: string) {
    return serviceV2({
      url: 'prod/fake-auth',
      method: 'post',
      data: {
        name,
        email
      }
    });
  }
}
