interface Jwt {
  'https://pomelo.la/client_id': string;
  iss: string;
  sub: string;
  aud: string[];
  iat: number;
  exp: number;
  azp: string;
  scope: string;
  org_id: string;
  permissions: string[];
}

interface AuthorizationTokenInfo {
  organizationId: string;
  userId: string;
  clientId: string;
  userPermissions: string[];
}

const parseAuthorizationToken = (
  authorizationToken: string
): AuthorizationTokenInfo => {
  const base64Payload = authorizationToken.split('.')[1];
  const payload = Buffer.from(base64Payload, 'base64');
  const data: Jwt = JSON.parse(payload.toString());
  return {
    organizationId: data.org_id,
    userId: data.sub,
    clientId: data['https://pomelo.la/client_id'],
    userPermissions: data.permissions
  };
};

export type { AuthorizationTokenInfo };

export default parseAuthorizationToken;
