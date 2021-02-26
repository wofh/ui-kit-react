import React from 'react';
import { action } from '@storybook/addon-actions';
import { Accordion } from './';

export default {
   title: 'Components/Accordion',
   component: Accordion,
};

const content =
   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

export const Default = () => (
   <>
      <Accordion title={'Setup'}>{content}</Accordion>
      <Accordion title={'Location'}>{content}</Accordion>
      <Accordion title={'Date and Time'}>{content}</Accordion>
   </>
);

export const Open = () => (
   <>
      <Accordion title={'Setup'} open>
         {content}
      </Accordion>
      <Accordion title={'Location'}>{content}</Accordion>
      <Accordion title={'Date and Time'}>{content}</Accordion>
   </>
);

export const Events = () => (
   <>
      <Accordion
         title={'Setup'}
         onOpen={action('Accordion Open Event')}
         onClose={action('Accordion Close Event')}
      >
         {content}
      </Accordion>
      <Accordion
         title={'Location'}
         onOpen={action('Accordion Open Event')}
         onClose={action('Accordion Close Event')}
      >
         {content}
      </Accordion>
      <Accordion
         title={'Date and Time'}
         onOpen={action('Accordion Open Event')}
         onClose={action('Accordion Close Event')}
      >
         {content}
      </Accordion>
   </>
);
