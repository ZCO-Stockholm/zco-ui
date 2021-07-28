import React from 'react'
import Card from './Card'

export default {
  title: 'Card'
};

export const CardLayout = () => <Card.Container>
  <Card.Section sectionBorders={['bottom']}>
    <Card.Header title="Card heading">
      <div>Header Actions</div>
    </Card.Header>
  </Card.Section>

  <Card.Section sectionBorders={['bottom', 'right']} sectionWidth="50%">
    Section A
  </Card.Section>
  <Card.Section sectionBorders={['bottom']} sectionWidth="50%">
    Section B
  </Card.Section>
  <Card.Section sectionBorders={['bottom']}>
    Section C
  </Card.Section>
</Card.Container>