# Deploy a Dockerized web service on k8s.

![Kubernetes](https://miro.medium.com/max/787/1*CaV1FLvaEzXUowDknO-B9Q.png)

## Scope
 - Create a simple web-api [http]
 - Dockerize the web-api
 - Setup kubernetes deployment manifests
 - Expose and access service deployed externally

### Tooling
- minikube version: v1.23.2
- kubectl version: v1.22.2 (Prebundled with kustomize)

### Create simple web-api [http]
 - We create a simple nodejs express http server

### Dockerize the web-api
 - Setup a `DockerFile` to create a docker image of the web-api
 - When building, name the image following this convention `docker_hub_username/repository:tag`, eg. `muinde:learn-with-geo:latest`
 - We push the built docker image to docker hub: `docker push image_name`

### Setup kubernetes deployment manifests
A few items to take note here:
 - We are using `minikube` to test the kubernetes deployment manifests
 - Setup a deployment manifest which describes how we want to run our web service
 - Setup a service which other resources can use to communicate with our web service
 - To run the deployment manifests, run `kubectl apply -k ./k8s/environments/develop/`
 - We have two rest-api-* pods running, now let's kill a pod `kubectl delete pod <pod_name>`, kubernetes will notice the pod was deleted and start another one, because we set our `replicas` to `2` in the develop deployment file overlay.
   
### Let's see what we have created

1. Switch to current minikube context on kubectl: `kubectl config use-context minikube`
2. List deployments `kubectl get deployments` [ We expect to have `rest-api` in the list]
3. List services `kubectl get services` [ We expect to have `rest-api-service` in the list]
4. List pods `kubectl get pods` [ We expect to have two pods with the prefix `rest-api-*` running]
5. To access the service on the host machine: `minikube service rest-api-service --url` [ We expect to have `Hello World!` printed on screen]

### Alright, we've made it this far, what else do we need to learn

1. Managing secrets and environment variables
2. CI/CD
3. Security [ClusterRoles, SSL certificate generation, using namespaces, Ingress]
4. Using Jobs
5. Logging and monitoring
6. Scaling configuration