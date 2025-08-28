<template>
  <xstack-table v-bind="$attrs">
    <!-- Explicitly pass named slots -->
    <slot name="header" slot="header"></slot>
    <slot name="body" slot="body"></slot>
    <slot name="footer" slot="footer"></slot>
    <!-- Pass default slot if any -->
    <slot></slot>
  </xstack-table>
</template>

<script setup>
// This component acts as a simple wrapper to ensure Vue correctly passes
// all attributes (props, events) to the underlying web component.
// It uses v-bind="$attrs" to pass all inherited attributes.
</script>