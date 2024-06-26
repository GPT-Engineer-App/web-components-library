import React from "react";
import { FaReact } from "react-icons/fa";

function App() {
  return (
    <div className="p-5">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-500">
          <FaReact className="inline mr-2" />
          React Component Library
        </h1>
      </header>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Buttons</h2>
        <div className="flex gap-4 flex-wrap">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Inputs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Text input" className="input input-bordered w-full max-w-xs" />
          <input type="number" placeholder="Number input" className="input input-bordered w-full max-w-xs" />
          <textarea placeholder="Textarea" className="textarea textarea-bordered h-24"></textarea>
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select option
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://via.placeholder.com/400x225?text=Architecture" alt="Architecture" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Architecture</h2>
              <p>Beautiful architectural designs from around the world.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">More Info</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://via.placeholder.com/400x225?text=Nature" alt="Nature" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Nature</h2>
              <p>Explore the beauty of nature and landscapes.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">More Info</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://via.placeholder.com/400x225?text=Technology" alt="Technology" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Technology</h2>
              <p>Latest technology trends and innovations.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4">Modals</h2>
        <div>
          <label htmlFor="my-modal" className="btn modal-button btn-primary">
            Open modal
          </label>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations!</h3>
              <p className="py-4">You've been selected to take part in our survey.</p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">
                  Close
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
