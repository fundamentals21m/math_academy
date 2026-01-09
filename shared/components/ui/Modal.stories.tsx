import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter } from './Modal';
import { Button } from './Button';
import { useState } from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    open: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Modal Title</ModalTitle>
              <ModalDescription>This is a modal description that provides more context.</ModalDescription>
            </ModalHeader>
            <div className="py-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                This is the modal content. You can put any content here including forms, images, or other components.
              </p>
            </div>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const Small: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Small Modal</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="sm">
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Small Modal</ModalTitle>
            </ModalHeader>
            <div className="py-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                This is a small modal for simple confirmations.
              </p>
            </div>
            <ModalFooter>
              <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button size="sm" onClick={() => setIsOpen(false)}>OK</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const Large: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Large Modal</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="lg">
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Large Modal</ModalTitle>
              <ModalDescription>This modal has more space for content.</ModalDescription>
            </ModalHeader>
            <div className="py-4 space-y-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Large modals are useful when you need to display more content, forms, or detailed information.
              </p>
              <div className="p-4 bg-[var(--color-bg-secondary)] rounded-lg">
                <p className="text-sm">Additional content area with background</p>
              </div>
            </div>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsOpen(false)}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const ExtraLarge: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Extra Large Modal</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen} size="xl">
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Extra Large Modal</ModalTitle>
              <ModalDescription>Maximum space for complex content.</ModalDescription>
            </ModalHeader>
            <div className="py-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Use extra large modals for complex forms, data tables, or detailed content that requires more screen real estate.
              </p>
            </div>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};

export const WarningModal: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button variant="danger" onClick={() => setIsOpen(true)}>Delete Item</Button>
        <Modal open={isOpen} onOpenChange={setIsOpen}>
          <ModalContent>
            <ModalHeader>
              <ModalTitle className="text-[var(--color-error)]">Delete Confirmation</ModalTitle>
              <ModalDescription>This action cannot be undone.</ModalDescription>
            </ModalHeader>
            <div className="py-4">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Are you sure you want to delete this item? All associated data will be permanently removed.
              </p>
            </div>
            <ModalFooter>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button variant="danger" onClick={() => setIsOpen(false)}>Delete</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  },
};
