<template>
  <common-aside-bar class="profile-bar" v-bind="$attrs" right>
    <template #full>
      <div class="profile-bar__full-content pt-12 px-6">
        <layout-profile-info class="mb-12" />
        <layout-profile-progress class="mb-12" />
      </div>
    </template>
    <template #mini>
      <div class="profile-bar__mini-content pt-12 px-4">
        <layout-profile-info class="mb-12" mini />
      </div>
    </template>
  </common-aside-bar>
</template>
