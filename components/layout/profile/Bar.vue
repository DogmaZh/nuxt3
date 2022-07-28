<template>
  <ui-aside-bar class="profile-bar" v-bind="$attrs" right>
    <template #full>
      <div class="profile-bar__full-content pt-6">
        <layout-profile-info class="mb-12" />
        <layout-profile-progress class="mb-12" />
      </div>
    </template>
    <template #mini>
      <div class="profile-bar__mini-content">P</div>
    </template>
  </ui-aside-bar>
</template>

<style lang="scss">
.profile-bar {
  @apply px-8 pt-11 w-14;
}
</style>
