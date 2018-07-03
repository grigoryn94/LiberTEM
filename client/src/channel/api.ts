import { ConnectRequest, ConnectRequestParams, ConnectResponse } from "../messages";

export function connectToCluster(params: ConnectRequestParams): Promise<ConnectResponse> {
    const payload: ConnectRequest = {
        connection: params
    }
    return fetch(`/api/config/connection/`, {
        body: JSON.stringify(payload),
        credentials: "same-origin",
        method: "PUT",
    }).then(r => r.json());
}