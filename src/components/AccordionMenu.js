import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

const AccordionMenuComponent = () => {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                className="flex w-full justify-between rounded-lg bg-gray-100 px-6 py-3 
                text-left text-lg font-medium text-red-900 hover:bg-gray-200 focus:outline-none 
                focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronDownIcon
                  className={`${
                    open
                      ? "rotate-180 transform duration-500"
                      : ""
                  } h-6 w-6 text-red-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pt-4 pb-2 text-lg text-gray-500">
                If you're unhappy with your purchase for any
                reason, email us within 90 days and we'll
                refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-6 py-3 text-left text-lg font-medium text-red-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "rotate-180 transform duration-500"
                      : ""
                  } h-6 w-6 text-red-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pt-4 pb-2 text-lg text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-6 py-3 text-left text-lg font-medium text-red-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "rotate-180 transform duration-500"
                      : ""
                  } h-6 w-6 text-red-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pt-4 pb-2 text-lg text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-6 py-3 text-left text-lg font-medium text-red-900 hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open
                      ? "rotate-180 transform duration-500"
                      : ""
                  } h-6 w-6 text-red-600`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-6 pt-4 pb-2 text-lg text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default AccordionMenuComponent;
