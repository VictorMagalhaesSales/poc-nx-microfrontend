import { Type } from "@angular/core";
import { loadRemote } from "@module-federation/enhanced/runtime";

export async function loadRemoteComponent<T>(
    remoteName: string,
    component: string
): Promise<Type<T>> {
  const module = await loadRemote(`${remoteName}/${component}`) as {
    [key: string]: Type<T>;
  };
  return module[component] as Type<T>;
}