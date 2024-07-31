"use client";
import React, { useState } from "react";
import Text from "../../atoms/typography/text/text";
import { Button } from "../../atoms/button";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import IconButton from "../../atoms/icon-button";
import clsx from "clsx";
import "./pagenation-styles.scss";

interface IPaginationProps {
  totalPerPage: number;
  totalShowing: number;
  totalItems: number;
  currentPage: number;
  handleCurrentPage: (val: number) => void;
}
const Pagenation = ({
  totalPerPage,
  totalItems,
  totalShowing,
  currentPage,
  handleCurrentPage,
}: IPaginationProps) => {
  const pages = totalItems / totalPerPage;
  const pageList = Array(pages).fill("");

  const handleNext = () => {
    if (currentPage >= pages - 1) return;

    handleCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage <= 1) return;

    handleCurrentPage(currentPage - 1);
  };

  console.log({ pageList });

  return (
    <div className="pagenation-wrapper">
      <Text text={`${totalShowing} of ${totalItems}`} otherClasses="text-sm" />
      <div className="pages-container">
        <Button
          buttonType="secondary"
          onClick={handlePrev}
          iconBefore={<BiCaretLeft />}
          otherClasses="border-0 p-0 bg-transparent"
        >
          Prev
        </Button>
        {pageList.map((_p, idx) => (
          <IconButton
            otherClasses={clsx("p-3 bg-transparent", {
              "bg-grey-2": currentPage === idx + 1,
            })}
            key={`page-${idx}-key`}
          >
            {idx + 1}
          </IconButton>
        ))}
        <Button
          buttonType="secondary"
          onClick={handleNext}
          iconBefore={<BiCaretRight />}
          otherClasses="border-0 p-0 bg-transparent"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Pagenation;
