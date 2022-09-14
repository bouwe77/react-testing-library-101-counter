import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

test('Counter component', async () => {
  render(<App />)

  const counterElement = screen.getByText('Counter:')
  within(counterElement).getByText('0')

  screen.getByText('Loading...')

  await screen.findByText('The year 0 does not exist.')

  const incrementButton = screen.getByRole('button', { name: 'increment' })
  await userEvent.click(incrementButton)

  within(counterElement).getByText('1')
  expect(screen.queryByText('0')).not.toBeInTheDocument()

  screen.getByText('Loading...')
  await screen.findByText('1 is the loneliest number.')

  const decrementButton = screen.getByRole('button', { name: 'decrement' })
  await userEvent.click(decrementButton)

  within(counterElement).getByText('0')
  expect(screen.queryByText('1')).not.toBeInTheDocument()

  //   screen.debug(element)
})
