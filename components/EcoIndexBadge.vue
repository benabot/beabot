<template>
  <a
    href="https://www.ecoindex.fr/resultats/?id=c79f4e0c-3b3e-47d4-abba-90df5f2a9b00"
    target="_blank"
    rel="noopener noreferrer"
    class="ecoindex-badge"
    title="Voir le score EcoIndex de ce site"
  >
    <span class="ecoindex-badge__label">EcoIndex</span>
    <span class="ecoindex-badge__score">A</span>
  </a>
</template>

<style scoped lang="scss">
.ecoindex-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  background-color: #1a1a1a;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.85em;
  margin-left: 0.5rem;
  transition: background-color 0.2s ease;
  vertical-align: middle;

  &:hover {
    background-color: #2a2a2a;
  }

  &__label {
    font-weight: 500;
  }

  &__score {
    font-weight: 700;
    padding: 0.1rem 0.35rem;
    background-color: #4caf50;
    border-radius: 3px;
    color: #1a1a1a;
  }
}
</style>
