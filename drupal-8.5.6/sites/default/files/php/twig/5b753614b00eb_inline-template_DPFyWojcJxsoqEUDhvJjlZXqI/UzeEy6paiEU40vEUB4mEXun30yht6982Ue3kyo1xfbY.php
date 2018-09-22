<?php

/* {# inline_template_start #}{{ edit_user }}|<a href="user/{{ uid }}/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all2"> Delete</a>
 */
class __TwigTemplate_bac9c1f80dd539f69ccc58d517cd33390297acd592cbf0fcaf583a8c0546a8c2 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array();
        $filters = array();
        $functions = array();

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array(),
                array(),
                array()
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["edit_user"]) ? $context["edit_user"] : null), "html", null, true));
        echo "|<a href=\"user/";
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, (isset($context["uid"]) ? $context["uid"] : null), "html", null, true));
        echo "/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all2\"> Delete</a>
";
    }

    public function getTemplateName()
    {
        return "{# inline_template_start #}{{ edit_user }}|<a href=\"user/{{ uid }}/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all2\"> Delete</a>
";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  44 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "{# inline_template_start #}{{ edit_user }}|<a href=\"user/{{ uid }}/cancel?destination=/RND/RobinSingh/drupal-8.5.6/user-list-all2\"> Delete</a>
", "");
    }
}
