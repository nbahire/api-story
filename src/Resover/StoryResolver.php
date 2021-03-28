<?php

namespace App\Resolver;

use ApiPlatform\Core\GraphQl\Resolver\QueryCollectionResolverInterface;
use App\Entity\Story;

final class BookCollectionResolver implements QueryCollectionResolverInterface
{

    public function __invoke(iterable $collection, array $context): iterable
    {

        foreach ($collection as $story) {
        }

        return $collection;
    }
}
