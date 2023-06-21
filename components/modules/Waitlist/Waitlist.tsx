import Modal from "@/components/elements/Modal";

export function Waitlist() {
  return (
    <div>
      <div>Waitlist</div>
      <Modal heading="Join #CMFest23 waitlist">
        <form>
          <div className="w-full mt-4">
            <label htmlFor="name" className="block text-sm mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="bg-transparent  block w-full text-primary border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none text-sm focus:border-primary-light focus:bg-white"
            />
          </div>
          <div className="w-full mt-4">
            <label htmlFor="name" className="block text-sm mb-2">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email"
              className="bg-transparent  block w-full text-primary border rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none text-sm focus:border-primary-light focus:bg-white"
            />
          </div>
          <div className="mt-6">
            <button className="bg-primary text-white px-14 py-4 rounded-full text-sm font-medium">
              Join Waitlist
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
