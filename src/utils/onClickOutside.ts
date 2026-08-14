import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/** Calls `handler` on any click/tap outside the referenced element — used to
 *  close dropdowns and popovers (month picker, profile menu). */
export function onClickOutside(target: Ref<HTMLElement | null>, handler: () => void) {
  function listener(event: MouseEvent) {
    const el = target.value
    if (!el || el.contains(event.target as Node)) return
    handler()
  }

  onMounted(() => document.addEventListener('click', listener, true))
  onBeforeUnmount(() => document.removeEventListener('click', listener, true))
}
